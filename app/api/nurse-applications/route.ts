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

const PAGE_SIZE = 20;
const LIST_FIELDS = "applicationId fullName mobileNumber qualification pinCode area stage status createdAt";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const search = searchParams.get("search")?.trim() || "";
    const status = searchParams.get("status") || "all";

    const query: Record<string, unknown> = {};
    if (status !== "all") {
      query.status = status;
    }
    if (search) {
      const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      query.$or = [
        { fullName: regex },
        { mobileNumber: regex },
        { pinCode: regex },
        { area: regex },
        { applicationId: regex },
      ];
    }

    const [applications, total] = await Promise.all([
      NurseApplication.find(query)
        .select(LIST_FIELDS)
        .sort({ createdAt: -1 })
        .skip((page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE)
        .lean(),
      NurseApplication.countDocuments(query),
    ]);

    return NextResponse.json({ applications, total, page, pageSize: PAGE_SIZE });
  } catch (error) {
    console.error("Failed to fetch nurse applications", error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}
