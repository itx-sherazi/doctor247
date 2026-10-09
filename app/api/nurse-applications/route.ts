import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { NurseApplication } from "@/lib/models/NurseApplication";
import { DOCUMENT_TYPES } from "@/app/nurse-registration/_lib/types";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const contentType = request.headers.get("content-type") || "";
    let payload: Record<string, unknown> = {};
    let profilePhotoFile: File | null = null;
    const documentFiles: Record<string, File> = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const rawPayload = formData.get("payload");
      if (rawPayload) {
        payload = JSON.parse(String(rawPayload));
      } else {
        // Form submitted key-value directly
        for (const [key, value] of formData.entries()) {
          if (key === "profilePhoto" && value instanceof File && value.size > 0) {
            profilePhotoFile = value;
          } else if (key.startsWith("document_") && value instanceof File && value.size > 0) {
            const docKey = key.replace("document_", "");
            documentFiles[docKey] = value;
          } else if (typeof value === "string") {
            try {
              payload[key] = JSON.parse(value);
            } catch {
              payload[key] = value;
            }
          }
        }
      }
      const pPhoto = formData.get("profilePhoto");
      if (pPhoto instanceof File && pPhoto.size > 0) {
        profilePhotoFile = pPhoto;
      }
    } else {
      payload = await request.json();
    }

    const applicationId = `NUR-${Date.now().toString(36).toUpperCase()}`;

    let profilePhoto: { url: string; publicId: string; originalName: string } | undefined;
    if (profilePhotoFile && profilePhotoFile.size > 0) {
      const uploaded = await uploadToCloudinary(profilePhotoFile, `applications/${applicationId}/profile`);
      profilePhoto = { ...uploaded, originalName: profilePhotoFile.name };
    }

    const documents: Record<string, { url: string; publicId: string; originalName: string }> = {};
    for (const doc of DOCUMENT_TYPES) {
      const file = documentFiles[doc.key];
      if (file && file instanceof File && file.size > 0) {
        const uploaded = await uploadToCloudinary(file, `applications/${applicationId}/documents`);
        documents[doc.key] = { ...uploaded, originalName: file.name };
      }
    }

    const application = await NurseApplication.create({
      applicationId,
      ...payload,
      ...(profilePhoto ? { profilePhoto } : {}),
      ...(Object.keys(documents).length > 0 ? { documents } : {}),
      stage: payload.stage || "submitted",
      status: payload.status || "pending",
    });

    return NextResponse.json({ application, applicationId: application.applicationId }, { status: 201 });
  } catch (error) {
    console.error("Failed to submit nurse application", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}

const PAGE_SIZE = 20;
const LIST_FIELDS =
  "applicationId fullName email mobileNumber qualification pinCode area city gender isStudent stage status createdAt updatedAt reviewerNotes";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const search = searchParams.get("search")?.trim() || "";
    const status = searchParams.get("status") || "all";
    const student = searchParams.get("student") || "all";

    const query: Record<string, unknown> = {};
    if (status !== "all") {
      query.status = status;
    }

    if (student === "students") {
      query.isStudent = true;
    } else if (student === "non-students") {
      query.isStudent = { $ne: true };
    }

    if (search) {
      const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      query.$or = [
        { fullName: regex },
        { email: regex },
        { mobileNumber: regex },
        { qualification: regex },
        { pinCode: regex },
        { area: regex },
        { city: regex },
        { applicationId: regex },
        { reviewerNotes: regex },
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
