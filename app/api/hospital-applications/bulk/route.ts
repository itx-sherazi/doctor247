import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { HospitalApplication } from "@/lib/models/HospitalApplication";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const rows: Record<string, unknown>[] = Array.isArray(body)
      ? body
      : Array.isArray(body?.applications || body?.hospitals || body?.applicants)
      ? body.applications || body.hospitals || body.applicants
      : [];

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: "No hospital applicant data provided" }, { status: 400 });
    }

    const created = [];
    const errors = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      try {
        const applicationId = `HOS-${(Date.now() + i).toString(36).toUpperCase()}`;

        const hospitalName = String(row.hospitalName || row.name || row["Hospital Name"] || row["Hospital"] || "").trim();
        const contactName = String(row.contactName || row["Contact Person"] || row["Contact Name"] || "").trim();
        const contactDesignation = String(row.contactDesignation || row["Designation"] || "").trim();
        const contactPhone = String(row.contactPhone || row.phone || row.mobile || row["Phone"] || row["Mobile"] || "").trim();
        const contactEmail = String(row.contactEmail || row.email || row["Email"] || "").trim().toLowerCase();
        const hospitalType = String(row.hospitalType || row["Hospital Type"] || row["Type"] || "").trim();
        const ownershipType = String(row.ownershipType || row["Ownership"] || "").trim();
        const address = String(row.address || row["Address"] || "").trim();
        const city = String(row.city || row["City"] || "Bangalore").trim();
        const state = String(row.state || row["State"] || "Karnataka").trim();
        const pinCode = String(row.pinCode || row.pincode || row["PIN"] || row["Pincode"] || "").trim();
        const totalBeds = String(row.totalBeds || row.beds || row["Beds"] || row["Total Beds"] || "").trim();
        const icuBeds = String(row.icuBeds || row["ICU Beds"] || "").trim();
        const reviewerNotes = String(row.reviewerNotes || row.notes || row["Notes"] || "").trim();
        const status = (row.status || row["Status"] || "pending").toString().toLowerCase();
        const stage = (row.stage || row["Stage"] || "submitted").toString().toLowerCase();

        const doc = await HospitalApplication.create({
          applicationId,
          hospitalName: hospitalName || undefined,
          contactName: contactName || undefined,
          contactDesignation: contactDesignation || undefined,
          contactPhone: contactPhone || undefined,
          contactEmail: contactEmail || undefined,
          hospitalType: hospitalType || undefined,
          ownershipType: ownershipType || undefined,
          address: address || undefined,
          city: city || undefined,
          state: state || undefined,
          pinCode: pinCode || undefined,
          totalBeds: totalBeds || undefined,
          icuBeds: icuBeds || undefined,
          reviewerNotes: reviewerNotes || undefined,
          status: ["pending", "approved", "rejected", "needs-more-information"].includes(status)
            ? status
            : "pending",
          stage: ["submitted", "document-verification", "site-visit", "agreement-signing", "activated"].includes(stage)
            ? stage
            : "submitted",
        });

        created.push(doc);
      } catch (err: unknown) {
        errors.push({ row: i + 1, error: (err as Error).message });
      }
    }

    return NextResponse.json({
      success: true,
      count: created.length,
      createdCount: created.length,
      errorsCount: errors.length,
      errors,
    });
  } catch (error) {
    console.error("Bulk upload hospital applicants failed", error);
    return NextResponse.json({ error: "Bulk upload failed" }, { status: 500 });
  }
}
