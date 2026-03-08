import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block /tours and all sub-pages when flag is off
  if (
    process.env.NEXT_PUBLIC_SHOW_TOURS === "false" &&
    (pathname === "/tours" || pathname.startsWith("/tours/"))
  ) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Block airport transfer page when flag is off
  if (
    process.env.NEXT_PUBLIC_SHOW_AIRPORT_TRANSFER === "false" &&
    (pathname === "/plan-your-trip/airport-transfer-service" ||
      pathname.startsWith("/plan-your-trip/airport-transfer-service/"))
  ) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/tours/:path*", "/plan-your-trip/airport-transfer-service/:path*"],
}
