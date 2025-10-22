import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const role = req.cookies.get("role")?.value || "guest";

  // Protect OEM routes
  if (req.nextUrl.pathname.startsWith("/oem") && role !== "oem") {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Protect Customer routes
  if (req.nextUrl.pathname.startsWith("/customer") && role !== "customer") {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/oem/:path*", "/customer/:path*"],
};