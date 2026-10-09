import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { deleteApplicationFolder, deleteFromCloudinary, uploadToCloudinary } from "@/lib/cloudinary";
import { NurseApplication } from "@/lib/models/NurseApplication";
import { DOCUMENT_TYPES } from "@/app/nurse-registration/_lib/types";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();
    const application = await NurseApplication.findOne({ applicationId: id }).lean();
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    return NextResponse.json({ application });
  } catch (error) {
    console.error("Failed to fetch nurse application", error);
    return NextResponse.json({ error: "Failed to fetch application" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();

    const existing = await NurseApplication.findOne({ applicationId: id });
    if (!existing) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    const contentType = request.headers.get("content-type") || "";
    let patch: Record<string, unknown> = {};
    let profilePhotoFile: File | null = null;
    const documentFiles: Record<string, File> = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const rawPayload = formData.get("payload");
      if (rawPayload) {
        patch = JSON.parse(String(rawPayload));
      } else {
        for (const [key, value] of formData.entries()) {
          if (typeof value === "string") {
            try {
              patch[key] = JSON.parse(value);
            } catch {
              patch[key] = value;
            }
          }
        }
      }

      const pPhoto = formData.get("profilePhoto");
      if (pPhoto instanceof File && pPhoto.size > 0) {
        profilePhotoFile = pPhoto;
      }

      for (const doc of DOCUMENT_TYPES) {
        const file = formData.get(`document_${doc.key}`);
        if (file instanceof File && file.size > 0) {
          documentFiles[doc.key] = file;
        }
      }
    } else {
      patch = await request.json();
    }

    delete patch._id;
    delete patch.applicationId;
    delete patch.createdAt;
    delete patch.updatedAt;

    if (profilePhotoFile && profilePhotoFile.size > 0) {
      if (existing.profilePhoto?.publicId) {
        await deleteFromCloudinary([existing.profilePhoto.publicId]);
      }
      const uploaded = await uploadToCloudinary(
        profilePhotoFile,
        `applications/${id}/profile`
      );
      patch.profilePhoto = { ...uploaded, originalName: profilePhotoFile.name };
    }

    type DocEntry = { url: string; publicId: string; originalName: string };
    let currentDocs: Record<string, DocEntry> = {};
    if (existing.documents) {
      if (existing.documents instanceof Map) {
        currentDocs = Object.fromEntries(existing.documents.entries());
      } else if (typeof (existing.documents as { toObject?: () => unknown }).toObject === "function") {
        currentDocs = (existing.documents as { toObject: () => Record<string, DocEntry> }).toObject();
      } else {
        currentDocs = { ...(existing.documents as Record<string, DocEntry>) };
      }
    }

    for (const [key, file] of Object.entries(documentFiles)) {
      if (currentDocs[key]?.publicId) {
        await deleteFromCloudinary([currentDocs[key].publicId]);
      }
      const uploaded = await uploadToCloudinary(file, `applications/${id}/documents`);
      currentDocs[key] = { ...uploaded, originalName: file.name };
    }

    if (Object.keys(documentFiles).length > 0) {
      patch.documents = currentDocs;
    }

    const application = await NurseApplication.findOneAndUpdate(
      { applicationId: id },
      { $set: patch },
      { new: true }
    ).lean();

    return NextResponse.json({ application });
  } catch (error) {
    console.error("Failed to update nurse application", error);
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();

    const application = await NurseApplication.findOne({ applicationId: id });
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    const { searchParams } = new URL(request.url);
    const docKey = searchParams.get("docKey");
    const deleteProfilePhoto = searchParams.get("deleteProfilePhoto") === "true";

    // Delete single profile photo if requested
    if (deleteProfilePhoto) {
      if (application.profilePhoto?.publicId) {
        await deleteFromCloudinary([application.profilePhoto.publicId]);
      }
      application.profilePhoto = undefined;
      await application.save();
      return NextResponse.json({ success: true, application });
    }

    // Delete single document if requested
    if (docKey) {
      type DocEntry = { url: string; publicId: string; originalName: string };
      let currentDocs: Record<string, DocEntry> = {};
      if (application.documents) {
        if (application.documents instanceof Map) {
          currentDocs = Object.fromEntries(application.documents.entries());
        } else if (typeof (application.documents as { toObject?: () => unknown }).toObject === "function") {
          currentDocs = (application.documents as { toObject: () => Record<string, DocEntry> }).toObject();
        } else {
          currentDocs = { ...(application.documents as Record<string, DocEntry>) };
        }
      }

      if (currentDocs[docKey]?.publicId) {
        await deleteFromCloudinary([currentDocs[docKey].publicId]);
      }
      delete currentDocs[docKey];
      application.documents = currentDocs as unknown as typeof application.documents;
      await application.save();
      return NextResponse.json({ success: true, application });
    }

    // Full application deletion
    const publicIds: string[] = [];
    if (application.profilePhoto?.publicId) {
      publicIds.push(application.profilePhoto.publicId);
    }
    const documents = application.documents as unknown as
      | Record<string, { publicId?: string }>
      | undefined;
    if (documents) {
      for (const doc of Object.values(documents)) {
        if (doc?.publicId) publicIds.push(doc.publicId);
      }
    }

    await deleteFromCloudinary(publicIds);
    await deleteApplicationFolder(id);
    await NurseApplication.deleteOne({ applicationId: id });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete nurse application", error);
    return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
  }
}