import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import { Otp } from "@/lib/models/Otp";
import { sendOtpWhatsApp } from "@/lib/whatsapp";

const OTP_TTL_MS = 10 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const { mobileNumber } = await request.json();

    if (!mobileNumber || !/^[6-9]\d{9}$/.test(mobileNumber)) {
      return NextResponse.json({ error: "Enter a valid Indian mobile number" }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await bcrypt.hash(otp, 10);
    const expiresAt = new Date(Date.now() + OTP_TTL_MS);

    await connectToDatabase();
    await Otp.findOneAndUpdate(
      { mobileNumber },
      { mobileNumber, otpHash, attempts: 0, expiresAt },
      { upsert: true }
    );

    await sendOtpWhatsApp(mobileNumber, otp);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("OTP send failed", error);
    return NextResponse.json({ error: "Failed to send OTP. Please try again." }, { status: 500 });
  }
}
