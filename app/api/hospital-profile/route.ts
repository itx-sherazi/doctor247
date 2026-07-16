import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { HospitalApplication } from "@/lib/models/HospitalApplication";
import { getAuthUser } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "hospital") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const application = await HospitalApplication.findOne({ userId: auth.userId }).lean();
  if (!application) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }
  return NextResponse.json({ application });
}

export async function PATCH(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "hospital") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDatabase();

    const existing = await HospitalApplication.findOne({ userId: auth.userId });
    if (!existing) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

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
