import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { deleteFromCloudinary, uploadToCloudinary } from "@/lib/cloudinary";
import { HospitalApplication } from "@/lib/models/HospitalApplication";
import { User } from "@/lib/models/User";
import { getAuthUser } from "@/lib/auth";

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

    const contentType = request.headers.get("content-type") || "";
    let payload: Record<string, unknown> = {};
    const uploadedDocs: { url: string; publicId: string; originalName: string }[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const rawPayload = formData.get("payload");
      if (rawPayload) {
        payload = JSON.parse(String(rawPayload));
      }

      const files = formData.getAll("documents");
      for (const file of files) {
        if (file instanceof File && file.size > 0) {
          const uploaded = await uploadToCloudinary(
            file,
            `hospital-applications/${existing.applicationId}/documents`
          );
          uploadedDocs.push({ ...uploaded, originalName: file.name });
        }
      }
    } else {
      payload = await request.json();
    }

    delete payload.userId;
    delete payload.applicationId;
    delete payload.stage;
    delete payload.status;
    delete payload.reviewerNotes;

    if (uploadedDocs.length > 0) {
      payload.documents = [...(existing.documents ?? []), ...uploadedDocs];
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

export async function DELETE(request: NextRequest) {
  const auth = getAuthUser(request);
  if (!auth || auth.role !== "hospital") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const existing = await HospitalApplication.findOne({ userId: auth.userId });
    if (!existing) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get("publicId");

    if (publicId) {
      await deleteFromCloudinary([publicId]);
      existing.documents = (existing.documents ?? []).filter(
        (d: { publicId?: string }) => d.publicId !== publicId
      );
      await existing.save();
      return NextResponse.json({ success: true, application: existing });
    }

    return NextResponse.json({ error: "No document specified" }, { status: 400 });
  } catch (error) {
    console.error("Failed to delete hospital document", error);
    return NextResponse.json({ error: "Failed to delete document" }, { status: 500 });
  }
}
