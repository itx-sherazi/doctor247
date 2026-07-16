import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { NurseApplication } from "@/lib/models/NurseApplication";
import { getAuthUser } from "@/lib/auth";
import { DOCUMENT_TYPES } from "@/app/nurse-registration/_lib/types";

export async function GET(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "nurse") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const application = await NurseApplication.findOne({ userId: auth.userId }).lean();
  if (!application) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }
  return NextResponse.json({ application });
}

export async function PATCH(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "nurse") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDatabase();

    const existing = await NurseApplication.findOne({ userId: auth.userId });
    if (!existing) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const formData = await request.formData();
    const payload = JSON.parse(String(formData.get("payload") ?? "{}"));

    // Never allow the client to overwrite ownership or admin-managed fields directly.
    delete payload.userId;
    delete payload.applicationId;
    delete payload.stage;
    delete payload.status;
    delete payload.reviewerNotes;

    const profilePhotoFile = formData.get("profilePhoto");
    if (profilePhotoFile instanceof File && profilePhotoFile.size > 0) {
      const uploaded = await uploadToCloudinary(profilePhotoFile, `applications/${existing.applicationId}/profile`);
      payload.profilePhoto = { ...uploaded, originalName: profilePhotoFile.name };
    }

    type DocEntry = { url: string; publicId: string; originalName: string };
    const documents: Record<string, DocEntry> = existing.documents
      ? (Object.fromEntries(existing.documents as unknown as Map<string, DocEntry>) as Record<string, DocEntry>)
      : {};
    for (const doc of DOCUMENT_TYPES) {
      const file = formData.get(`document_${doc.key}`);
      if (file instanceof File && file.size > 0) {
        const uploaded = await uploadToCloudinary(file, `applications/${existing.applicationId}/documents`);
        documents[doc.key] = { ...uploaded, originalName: file.name };
      }
    }
    payload.documents = documents;

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
