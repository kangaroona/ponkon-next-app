import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const field = request.nextUrl.searchParams.get("id");
  const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${field}`)).json();
  const result = field ? { [field]: data[field] } : data;
  return NextResponse.json(result);
}
