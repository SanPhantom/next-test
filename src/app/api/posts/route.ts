import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const products = await res.json();
  return Response.json({
    products,
  });
}
