import { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const tags = request.nextUrl.searchParams.get("tag");
  const path = request.nextUrl.searchParams.get("path");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const products = await res.json();
  // revalidateTag("getPosts");
  // revalidatePath("/[locale]/marketplace", "page");
  return Response.json({
    products,
  });
}
