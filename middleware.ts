import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the JWT token from the request headers
  const token = request.headers.get("Authorization")?.split(" ")[1];

  // Protected API routes that require authentication
  const protectedPaths = [
    "/api/user",
    "/api/points",
    "/api/assistants",
  ];

  // Check if the current path requires authentication
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  // If the path is protected and there's no valid token, return 401
  if (isProtectedPath && !token) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};