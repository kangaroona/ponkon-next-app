import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RateLimiter } from "limiter";
const limiter = new RateLimiter({ tokensPerInterval: 3, interval: "min", fireImmediately: true });

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("url=", request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith("/list/api")) {
    const remainingRequests = await limiter.removeTokens(1);
    if (remainingRequests < 0) {
      return new NextResponse(JSON.stringify({ success: false, message: "Too Many Requests" }), {
        status: 429,
        headers: { "content-type": "application/json" },
      });
    }
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
