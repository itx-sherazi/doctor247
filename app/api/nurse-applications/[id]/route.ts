import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { deleteApplicationFolder, deleteFromCloudinary } from "@/lib/cloudinary";
import { NurseApplication } from "@/lib/models/NurseApplication";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();
    const application = await NurseApplication.findOne({ applicationId: id }).lean();
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    return NextResponse.json({ application });
  } catch (error) {
    console.error("Failed to fetch nurse application", error);
    return NextResponse.json({ error: "Failed to fetch application" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();
    const patch = await request.json();
    const allowed = ["stage", "status", "reviewerNotes"];
    const update = Object.fromEntries(Object.entries(patch).filter(([key]) => allowed.includes(key)));

    const application = await NurseApplication.findOneAndUpdate(
      { applicationId: id },
      { $set: update },
      { new: true }
    ).lean();

    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    return NextResponse.json({ application });
  } catch (error) {
    console.error("Failed to update nurse application", error);
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();

    const application = await NurseApplication.findOne({ applicationId: id }).lean();
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    const publicIds: string[] = [];
    if (application.profilePhoto?.publicId) {
      publicIds.push(application.profilePhoto.publicId);
    }
    const documents = application.documents as unknown as Record<string, { publicId?: string }> | undefined;
    if (documents) {
      for (const doc of Object.values(documents)) {
        if (doc?.publicId) publicIds.push(doc.publicId);
      }
    }

    await deleteFromCloudinary(publicIds);
    await deleteApplicationFolder(id);
    await NurseApplication.deleteOne({ applicationId: id });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete nurse application", error);
    return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
  }
}
