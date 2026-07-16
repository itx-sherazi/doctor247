import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function handleAdminAuth(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login" || pathname === "/api/admin-login") {
    return null;
  }

  const isProtectedPage = pathname.startsWith("/admin");
  const isProtectedApi = pathname.startsWith("/api/nurse-applications") || pathname.startsWith("/api/hospital-applications");

  if (!isProtectedPage && !isProtectedApi) {
    return null;
  }

  const token = request.cookies.get("d247_admin")?.value;
  if (Boolean(token)) {
    return null;
  }

  if (isProtectedApi) {
    // Allow the public registration forms to submit new applications (POST) without admin auth.
    if (
      (pathname === "/api/nurse-applications" || pathname === "/api/hospital-applications") &&
      request.method === "POST"
    ) {
      return null;
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

function handleAccountAuth(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;

  const isProtectedPage = pathname.startsWith("/nurse-profile") || pathname.startsWith("/hospital-profile");
  const isProtectedApi = pathname.startsWith("/api/nurse-profile") || pathname.startsWith("/api/hospital-profile");

  if (!isProtectedPage && !isProtectedApi) {
    return null;
  }

  const token = request.cookies.get("d247_auth")?.value;
  if (Boolean(token)) {
    return null;
  }

  if (isProtectedApi) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export function proxy(request: NextRequest) {
  return handleAdminAuth(request) ?? handleAccountAuth(request) ?? NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/nurse-applications/:path*",
    "/api/hospital-applications/:path*",
    "/nurse-profile/:path*",
    "/hospital-profile/:path*",
    "/api/nurse-profile/:path*",
    "/api/hospital-profile/:path*",
  ],
};
