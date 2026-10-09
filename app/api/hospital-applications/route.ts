import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { HospitalApplication } from "@/lib/models/HospitalApplication";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const contentType = request.headers.get("content-type") || "";
    let payload: Record<string, unknown> = {};

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const rawPayload = formData.get("payload");
      if (rawPayload) {
        payload = JSON.parse(String(rawPayload));
      } else {
        for (const [key, value] of formData.entries()) {
          if (typeof value === "string") {
            try {
              payload[key] = JSON.parse(value);
            } catch {
              payload[key] = value;
            }
          }
        }
      }
    } else {
      payload = await request.json();
    }

    const applicationId = `HOS-${Date.now().toString(36).toUpperCase()}`;

    const application = await HospitalApplication.create({
      applicationId,
      ...payload,
      stage: payload.stage || "submitted",
      status: payload.status || "pending",
    });

    return NextResponse.json({ application, applicationId: application.applicationId }, { status: 201 });
  } catch (error) {
    console.error("Failed to submit hospital application", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}

const PAGE_SIZE = 20;
const LIST_FIELDS =
  "applicationId hospitalName contactName contactPhone contactEmail hospitalType ownershipType city state pinCode address totalBeds icuBeds stage status createdAt updatedAt reviewerNotes";

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
        { hospitalName: regex },
        { contactName: regex },
        { contactPhone: regex },
        { contactEmail: regex },
        { hospitalType: regex },
        { city: regex },
        { pinCode: regex },
        { address: regex },
        { applicationId: regex },
        { reviewerNotes: regex },
      ];
    }

    const [applications, total] = await Promise.all([
      HospitalApplication.find(query)
        .select(LIST_FIELDS)
        .sort({ createdAt: -1 })
        .skip((page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE)
        .lean(),
      HospitalApplication.countDocuments(query),
    ]);

    return NextResponse.json({ applications, total, page, pageSize: PAGE_SIZE });
  } catch (error) {
    console.error("Failed to fetch hospital applications", error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}
