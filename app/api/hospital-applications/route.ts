import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { HospitalApplication } from "@/lib/models/HospitalApplication";

export async function GET() {
  try {
    await connectToDatabase();
    const applications = await HospitalApplication.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ applications });
  } catch (error) {
    console.error("Failed to fetch hospital applications", error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}
