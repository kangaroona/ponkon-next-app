export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id") || 1;
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const product = await res.json();

  return Response.json({ id: "1" });
}
