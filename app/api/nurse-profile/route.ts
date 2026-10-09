import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { deleteFromCloudinary, uploadToCloudinary } from "@/lib/cloudinary";
import { NurseApplication } from "@/lib/models/NurseApplication";
import { User } from "@/lib/models/User";
import { getAuthUser } from "@/lib/auth";
import { DOCUMENT_TYPES } from "@/app/nurse-registration/_lib/types";

async function findOrCreateApplication(userId: string) {
  const existing = await NurseApplication.findOne({ userId });
  if (existing) return existing;

  const user = await User.findById(userId).lean();
  const applicationId = `NUR-${Date.now().toString(36).toUpperCase()}`;
  return NurseApplication.create({
    applicationId,
    userId,
    email: user?.email ?? "",
  });
}

export async function GET(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "nurse") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const application = await findOrCreateApplication(auth.userId);
  return NextResponse.json({ application });
}

export async function PATCH(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "nurse") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const existing = await findOrCreateApplication(auth.userId);

    const contentType = request.headers.get("content-type") || "";
    let payload: Record<string, unknown> = {};
    let profilePhotoFile: File | null = null;
    const documentFiles: Record<string, File> = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const rawPayload = formData.get("payload");
      if (rawPayload) {
        payload = JSON.parse(String(rawPayload));
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
      payload = await request.json();
    }

    // Never allow nurse to overwrite administrative fields
    delete payload.userId;
    delete payload.applicationId;
    delete payload.stage;
    delete payload.status;
    delete payload.reviewerNotes;

    if (profilePhotoFile && profilePhotoFile.size > 0) {
      if (existing.profilePhoto?.publicId) {
        await deleteFromCloudinary([existing.profilePhoto.publicId]);
      }
      const uploaded = await uploadToCloudinary(
        profilePhotoFile,
        `applications/${existing.applicationId}/profile`
      );
      payload.profilePhoto = { ...uploaded, originalName: profilePhotoFile.name };
    }

    type DocEntry = { url: string; publicId: string; originalName: string };
    const currentDocs: Record<string, DocEntry> = existing.documents
      ? (Object.fromEntries(
          existing.documents as unknown as Map<string, DocEntry>
        ) as Record<string, DocEntry>)
      : {};

    for (const [key, file] of Object.entries(documentFiles)) {
      if (currentDocs[key]?.publicId) {
        await deleteFromCloudinary([currentDocs[key].publicId]);
      }
      const uploaded = await uploadToCloudinary(
        file,
        `applications/${existing.applicationId}/documents`
      );
      currentDocs[key] = { ...uploaded, originalName: file.name };
    }

    if (Object.keys(documentFiles).length > 0) {
      payload.documents = currentDocs;
    }

    const updated = await NurseApplication.findOneAndUpdate(
      { userId: auth.userId },
      { $set: payload },
      { new: true }
    ).lean();

    return NextResponse.json({ application: updated });
  } catch (error) {
    console.error("Failed to update nurse profile", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}

// DELETE single document or profile photo
export async function DELETE(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "nurse") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const existing = await NurseApplication.findOne({ userId: auth.userId });
    if (!existing) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    const { searchParams } = new URL(request.url);
    const docKey = searchParams.get("docKey");
    const deleteProfilePhoto = searchParams.get("deleteProfilePhoto") === "true";

    if (deleteProfilePhoto && existing.profilePhoto?.publicId) {
      await deleteFromCloudinary([existing.profilePhoto.publicId]);
      existing.profilePhoto = undefined;
      await existing.save();
      return NextResponse.json({ success: true, application: existing });
    }

    if (docKey) {
      type DocEntry = { url: string; publicId: string; originalName: string };
      const currentDocs: Record<string, DocEntry> = existing.documents
        ? (Object.fromEntries(
            existing.documents as unknown as Map<string, DocEntry>
          ) as Record<string, DocEntry>)
        : {};

      if (currentDocs[docKey]?.publicId) {
        await deleteFromCloudinary([currentDocs[docKey].publicId]);
      }
      delete currentDocs[docKey];
      existing.documents = currentDocs as unknown as typeof existing.documents;
      await existing.save();
      return NextResponse.json({ success: true, application: existing });
    }

    return NextResponse.json({ error: "No document specified to delete" }, { status: 400 });
  } catch (error) {
    console.error("Failed to delete document from nurse profile", error);
    return NextResponse.json({ error: "Failed to delete document" }, { status: 500 });
  }
}
