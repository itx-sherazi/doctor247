import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import { Otp } from "@/lib/models/Otp";

const MAX_ATTEMPTS = 5;

export async function POST(request: NextRequest) {
  try {
    const { mobileNumber, otp } = await request.json();

    if (!mobileNumber || !otp) {
      return NextResponse.json({ error: "Mobile number and OTP are required" }, { status: 400 });
    }

    await connectToDatabase();
    const record = await Otp.findOne({ mobileNumber });

    if (!record) {
      return NextResponse.json({ error: "OTP expired or not found. Please request a new one." }, { status: 400 });
    }

    if (record.attempts >= MAX_ATTEMPTS) {
      await Otp.deleteOne({ mobileNumber });
      return NextResponse.json({ error: "Too many incorrect attempts. Please request a new OTP." }, { status: 429 });
    }

    const isValid = await bcrypt.compare(String(otp), record.otpHash);

    if (!isValid) {
      record.attempts += 1;
      await record.save();
      return NextResponse.json({ error: "Incorrect OTP. Please try again." }, { status: 400 });
    }

    await Otp.deleteOne({ mobileNumber });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("OTP verify failed", error);
    return NextResponse.json({ error: "Failed to verify OTP. Please try again." }, { status: 500 });
  }
}
