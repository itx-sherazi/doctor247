import { NextRequest, NextResponse } from "next/server";
import { verifyAuthToken } from "@/lib/jwt";
import { connectToDatabase } from "@/lib/mongodb";
import { User } from "@/lib/models/User";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("d247_auth")?.value;
  const payload = token ? verifyAuthToken(token) : null;

  if (!payload) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const user = await User.findById(payload.userId).lean();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ userId: String(user._id), email: user.email, role: user.role });
}
