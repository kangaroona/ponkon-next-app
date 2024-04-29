import { NextRequest } from "next/server";

export const revalidate = 5;
export async function GET(request: NextRequest) {
  //console.log(request.cookies.getAll());

  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id") || 1;
  // console.log(id);
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const product = await res.json();
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = await res.json();

  return Response.json({ time: new Date().toLocaleTimeString(), data });
}
