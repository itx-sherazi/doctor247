import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { HospitalApplication } from "@/lib/models/HospitalApplication";

const PAGE_SIZE = 20;
const LIST_FIELDS = "applicationId hospitalName contactPhone hospitalType pinCode stage status createdAt";

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
      query.$or = [{ hospitalName: regex }, { contactPhone: regex }, { pinCode: regex }, { applicationId: regex }];
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
