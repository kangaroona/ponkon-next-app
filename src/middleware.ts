import { createMiddleware } from "next-easy-middlewares";
import { NextRequest, NextResponse } from "next/server";
import { requestLimitMiddleware } from "./middlewares/requestlimit";
const middlewares = {
  "/list/api": requestLimitMiddleware,
  // define your middlewares here...
};
export const middleware = createMiddleware(middlewares);

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/list/:path*",
};
