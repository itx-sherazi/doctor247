import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { HospitalApplication } from "@/lib/models/HospitalApplication";
import { User } from "@/lib/models/User";
import { getAuthUser } from "@/lib/auth";

// If a user's application was previously deleted (e.g. by an admin) but their login
// account still exists, create a fresh blank application so they aren't permanently
// locked out of viewing/completing their profile.
async function findOrCreateApplication(userId: string) {
  const existing = await HospitalApplication.findOne({ userId });
  if (existing) return existing;

  const user = await User.findById(userId).lean();
  const applicationId = `HOS-${Date.now().toString(36).toUpperCase()}`;
  return HospitalApplication.create({
    applicationId,
    userId,
    contactEmail: user?.email ?? "",
  });
}

export async function GET(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "hospital") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const application = await findOrCreateApplication(auth.userId);
  return NextResponse.json({ application });
}

export async function PATCH(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "hospital") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDatabase();

    const existing = await findOrCreateApplication(auth.userId);

    const formData = await request.formData();
    const payload = JSON.parse(String(formData.get("payload") ?? "{}"));

    delete payload.userId;
    delete payload.applicationId;
    delete payload.stage;
    delete payload.status;
    delete payload.reviewerNotes;

    const documentFiles = formData.getAll("documents");
    const uploadedDocuments: { url: string; publicId: string; originalName: string }[] = [];
    for (const file of documentFiles) {
      if (file instanceof File && file.size > 0) {
        const uploaded = await uploadToCloudinary(file, `hospital-applications/${existing.applicationId}/documents`);
        uploadedDocuments.push({ ...uploaded, originalName: file.name });
      }
    }
    if (uploadedDocuments.length > 0) {
      payload.documents = [...(existing.documents ?? []), ...uploadedDocuments];
    }

    const updated = await HospitalApplication.findOneAndUpdate(
      { userId: auth.userId },
      { $set: payload },
      { new: true }
    ).lean();

    return NextResponse.json({ application: updated });
  } catch (error) {
    console.error("Failed to update hospital profile", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
