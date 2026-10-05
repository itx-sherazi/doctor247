import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { NurseApplication } from "@/lib/models/NurseApplication";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const rows: Record<string, unknown>[] = Array.isArray(body)
      ? body
      : Array.isArray(body?.applicants)
      ? body.applicants
      : [];

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: "No applicant data provided in request" }, { status: 400 });
    }

    const created = [];
    const errors = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      try {
        const applicationId = `NUR-${(Date.now() + i).toString(36).toUpperCase()}`;
        
        // Normalize fields from possible CSV variations
        const fullName = String(row.fullName || row.name || row.applicantName || row["Full Name"] || row["Name"] || "").trim();
        const mobileNumber = String(row.mobileNumber || row.mobile || row.phone || row["Mobile"] || row["Phone"] || "").trim();
        const email = String(row.email || row["Email"] || "").trim().toLowerCase();
        const qualification = String(row.qualification || row["Qualification"] || "").trim();
        const experience = String(row.yearsOfExperience || row.experience || row["Experience"] || "").trim();
        const city = String(row.city || row["City"] || "Bangalore").trim();
        const pinCode = String(row.pinCode || row.pincode || row["PIN"] || row["Pincode"] || "").trim();
        const area = String(row.area || row["Area"] || "").trim();
        const gender = String(row.gender || row["Gender"] || "").toLowerCase().trim();
        const currentEmployer = String(row.currentEmployer || row["Current Employer"] || "").trim();
        const registrationNumber = String(row.registrationNumber || row["Registration No"] || "").trim();
        const reviewerNotes = String(row.reviewerNotes || row.notes || row["Notes"] || "").trim();
        const isStudent = Boolean(
          row.isStudent ||
          String(row["Is Student"] || "").toLowerCase() === "yes" ||
          String(row["Student"] || "").toLowerCase() === "yes" ||
          qualification.toLowerCase().includes("student")
        );
        const status = (row.status || row["Status"] || "pending").toString().toLowerCase();
        const stage = (row.stage || row["Stage"] || "submitted").toString().toLowerCase();

        const doc = await NurseApplication.create({
          applicationId,
          fullName: fullName || undefined,
          mobileNumber: mobileNumber || undefined,
          email: email || undefined,
          qualification: qualification || undefined,
          yearsOfExperience: experience || undefined,
          city: city || undefined,
          pinCode: pinCode || undefined,
          area: area || undefined,
          gender: gender || undefined,
          currentEmployer: currentEmployer || undefined,
          registrationNumber: registrationNumber || undefined,
          reviewerNotes: reviewerNotes || undefined,
          isStudent,
          status: ["pending", "approved", "rejected", "needs-more-information"].includes(status)
            ? status
            : "pending",
          stage: [
            "submitted",
            "document-verification",
            "interview",
            "clinical-assessment",
            "background-verification",
            "induction-training",
            "activated",
          ].includes(stage)
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
    console.error("Bulk upload nurse applicants failed", error);
    return NextResponse.json({ error: "Bulk upload failed" }, { status: 500 });
  }
}
