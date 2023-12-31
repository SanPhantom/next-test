import React from "react";
import ProductDetailPage from "@/pages/ProductDetailPage";
import BackIcon from "@/components/BackIcon";

const Page = async ({ params: { postId } }: { params: { postId: string } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "GET",
    }
  );
  const product = await res.json();
  console.log("product id ====>", product.id, "page");
  return (
    <>
      <ProductDetailPage product={product} />
      <BackIcon isModal={true} />
    </>
  );
};

export default Page;
