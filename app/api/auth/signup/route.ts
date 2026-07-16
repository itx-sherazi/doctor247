import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import { User } from "@/lib/models/User";
import { NurseApplication } from "@/lib/models/NurseApplication";
import { HospitalApplication } from "@/lib/models/HospitalApplication";
import { signAuthToken } from "@/lib/jwt";

export async function POST(request: NextRequest) {
  try {
    const { email, password, role } = await request.json();

    if (!email || !password || !role) {
      return NextResponse.json({ error: "Email, password, and role are required" }, { status: 400 });
    }

    if (role !== "nurse" && role !== "hospital") {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    if (String(password).length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
    }

    await connectToDatabase();

    const normalizedEmail = String(email).toLowerCase().trim();
    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) {
      return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ email: normalizedEmail, passwordHash, role });

    const applicationId =
      (role === "nurse" ? "NUR-" : "HOS-") + Date.now().toString(36).toUpperCase();

    if (role === "nurse") {
      await NurseApplication.create({ applicationId, userId: user._id, email: normalizedEmail });
    } else {
      await HospitalApplication.create({ applicationId, userId: user._id, contactEmail: normalizedEmail });
    }

    const token = signAuthToken({ userId: String(user._id), role: user.role });

    const response = NextResponse.json({ ok: true, role: user.role });
    response.cookies.set("d247_auth", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Signup failed", error);
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
