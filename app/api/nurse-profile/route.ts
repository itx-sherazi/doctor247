import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { NurseApplication } from "@/lib/models/NurseApplication";
import { User } from "@/lib/models/User";
import { getAuthUser } from "@/lib/auth";
import { DOCUMENT_TYPES } from "@/app/nurse-registration/_lib/types";

// If a user's application was previously deleted (e.g. by an admin) but their login
// account still exists, create a fresh blank application so they aren't permanently
// locked out of viewing/completing their profile.
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
