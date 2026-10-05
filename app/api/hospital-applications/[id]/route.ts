import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { deleteApplicationFolder, deleteFromCloudinary, uploadToCloudinary } from "@/lib/cloudinary";
import { HospitalApplication } from "@/lib/models/HospitalApplication";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();
    const application = await HospitalApplication.findOne({ applicationId: id }).lean();
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    return NextResponse.json({ application });
  } catch (error) {
    console.error("Failed to fetch hospital application", error);
    return NextResponse.json({ error: "Failed to fetch application" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();

    const existing = await HospitalApplication.findOne({ applicationId: id });
    if (!existing) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    const contentType = request.headers.get("content-type") || "";
    let patch: Record<string, unknown> = {};
    const uploadedDocs: { url: string; publicId: string; originalName: string }[] = [];

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

      const files = formData.getAll("documents");
      for (const file of files) {
        if (file instanceof File && file.size > 0) {
          const uploaded = await uploadToCloudinary(
            file,
            `hospital-applications/${id}/documents`
          );
          uploadedDocs.push({ ...uploaded, originalName: file.name });
        }
      }
    } else {
      patch = await request.json();
    }

    delete patch._id;
    delete patch.applicationId;
    delete patch.createdAt;
    delete patch.updatedAt;

    if (uploadedDocs.length > 0) {
      patch.documents = [...(existing.documents ?? []), ...uploadedDocs];
    }

    const application = await HospitalApplication.findOneAndUpdate(
      { applicationId: id },
      { $set: patch },
      { new: true }
    ).lean();

    return NextResponse.json({ application });
  } catch (error) {
    console.error("Failed to update hospital application", error);
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();

    const application = await HospitalApplication.findOne({ applicationId: id });
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get("publicId");

    // Single document deletion
    if (publicId) {
      await deleteFromCloudinary([publicId]);
      application.documents = (application.documents ?? []).filter(
        (d: { publicId?: string }) => d.publicId !== publicId
      );
      await application.save();
      return NextResponse.json({ success: true, application });
    }

    // Full application deletion
    const publicIds: string[] = (application.documents ?? [])
      .map((doc: { publicId?: string }) => doc?.publicId)
      .filter((docId: string | undefined): docId is string => Boolean(docId));

    await deleteFromCloudinary(publicIds);
    await deleteApplicationFolder(id, "hospital-applications");
    await HospitalApplication.deleteOne({ applicationId: id });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete hospital application", error);
    return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
  }
}
