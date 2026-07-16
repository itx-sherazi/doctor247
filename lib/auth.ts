import { NextRequest } from "next/server";
import { verifyAuthToken, AuthTokenPayload } from "@/lib/jwt";

export function getAuthUser(request: NextRequest): AuthTokenPayload | null {
  const token = request.cookies.get("d247_auth")?.value;
  if (!token) return null;
  return verifyAuthToken(token);
}
