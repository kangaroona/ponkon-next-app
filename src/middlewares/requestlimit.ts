import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RateLimiter } from "limiter";
const limiter = new RateLimiter({ tokensPerInterval: 10, interval: "min", fireImmediately: true });

// This function can be marked `async` if using `await` inside
export async function requestLimitMiddleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/list/api")) {
    const remainingRequests = await limiter.removeTokens(1);
    console.log("remainingRequests=", remainingRequests);
    if (remainingRequests < 0) {
      return new NextResponse(JSON.stringify({ success: false, message: "Too Many Requests" }), {
        status: 429,
        headers: { "content-type": "application/json" },
      });
    }
    return NextResponse.next();
  }
}
