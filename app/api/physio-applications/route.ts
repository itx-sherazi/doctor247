import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { PhysioApplication } from "@/lib/models/PhysioApplication";
import { DOCUMENT_TYPES } from "@/app/physio-registration/_lib/types";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const formData = await request.formData();
    const payload = JSON.parse(String(formData.get("payload") ?? "{}"));

    const applicationId = `PHY-${Date.now().toString(36).toUpperCase()}`;

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

    const application = await PhysioApplication.create({
      applicationId,
      ...payload,
      profilePhoto: profilePhoto
        ? { ...profilePhoto, originalName: (profilePhotoFile as File).name }
        : undefined,
      documents,
    });

    return NextResponse.json({ applicationId: application.applicationId }, { status: 201 });
  } catch (error) {
    console.error("Failed to submit physio application", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}

const PAGE_SIZE = 20;
const LIST_FIELDS =
  "applicationId fullName mobileNumber qualification pinCode area isStudent stage status createdAt";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const search = searchParams.get("search")?.trim() || "";
    const status = searchParams.get("status") || "all";
    const studentFilter = searchParams.get("student") || "all";

    const query: Record<string, unknown> = {};
    if (status !== "all") {
      query.status = status;
    }
    if (studentFilter === "students") {
      query.isStudent = true;
    } else if (studentFilter === "non-students") {
      query.isStudent = false;
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
      PhysioApplication.find(query)
        .select(LIST_FIELDS)
        .sort({ createdAt: -1 })
        .skip((page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE)
        .lean(),
      PhysioApplication.countDocuments(query),
    ]);

    return NextResponse.json({ applications, total, page, pageSize: PAGE_SIZE });
  } catch (error) {
    console.error("Failed to fetch physio applications", error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}