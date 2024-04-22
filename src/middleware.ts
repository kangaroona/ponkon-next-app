import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("url=", request.nextUrl.pathname);
  // if (request.nextUrl.pathname.startsWith("/users")) {
  //   return NextResponse.rewrite(new URL("/about-2", request.url));
  // }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
