import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { deleteApplicationFolder, deleteFromCloudinary } from "@/lib/cloudinary";
import { HospitalApplication } from "@/lib/models/HospitalApplication";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();
    const application = await HospitalApplication.findOne({ applicationId: id }).lean();
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    return NextResponse.json({ application });
  } catch (error) {
    console.error("Failed to fetch hospital application", error);
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

    const application = await HospitalApplication.findOneAndUpdate(
      { applicationId: id },
      { $set: update },
      { new: true }
    ).lean();

    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    return NextResponse.json({ application });
  } catch (error) {
    console.error("Failed to update hospital application", error);
    return NextResponse.json({ error: "Failed to update application" }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await connectToDatabase();

    const application = await HospitalApplication.findOne({ applicationId: id }).lean();
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    const publicIds: string[] = (application.documents ?? [])
      .map((doc: { publicId?: string }) => doc?.publicId)
      .filter((docId: string | undefined): docId is string => Boolean(docId));

    await deleteFromCloudinary(publicIds);
    await deleteApplicationFolder(id, "hospital-applications");
    await HospitalApplication.deleteOne({ applicationId: id });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete hospital application", error);
    return NextResponse.json({ error: "Failed to delete application" }, { status: 500 });
  }
}
