import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { NurseApplication } from "@/lib/models/NurseApplication";
import { DOCUMENT_TYPES } from "@/app/nurse-registration/_lib/types";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const formData = await request.formData();
    const payload = JSON.parse(String(formData.get("payload") ?? "{}"));

    const applicationId = `NUR-${Date.now().toString(36).toUpperCase()}`;

    const profilePhotoFile = formData.get("profilePhoto");
    const profilePhoto =
      profilePhotoFile instanceof File && profilePhotoFile.size > 0
        ? await uploadToCloudinary(profilePhotoFile, `applications/${applicationId}/profile`)
        : undefined;

    const documents: Record<string, { url: string; publicId: string; originalName: string }> = {};
    for (const doc of DOCUMENT_TYPES) {
      const file = formData.get(`document_${doc.key}`);
      if (file instanceof File && file.size > 0) {
        const uploaded = await uploadToCloudinary(file, `applications/${applicationId}/documents`);
        documents[doc.key] = { ...uploaded, originalName: file.name };
      }
    }

    const application = await NurseApplication.create({
      applicationId,
      ...payload,
      profilePhoto: profilePhoto ? { ...profilePhoto, originalName: (profilePhotoFile as File).name } : undefined,
      documents,
    });

    return NextResponse.json({ applicationId: application.applicationId }, { status: 201 });
  } catch (error) {
    console.error("Failed to submit nurse application", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const applications = await NurseApplication.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ applications });
  } catch (error) {
    console.error("Failed to fetch nurse applications", error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}
