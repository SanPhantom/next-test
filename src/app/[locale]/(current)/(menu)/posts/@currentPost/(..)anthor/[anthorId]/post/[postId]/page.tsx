import React from "react";

import { Dialog } from "@mui/material";
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
  console.log("product id ====>", product.id, "modal");
  return (
    <Dialog open fullScreen>
      <ProductDetailPage product={product} />
      <BackIcon isModal={true} />
    </Dialog>
  );
};

export default Page;
