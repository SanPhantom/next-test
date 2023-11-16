import React from 'react';
import ProductDetailPage from "@/pages/ProductDetailPage";
import { Dialog } from '@mui/material'
import BackIcon from "@/components/BackIcon";

const Page = async ({params: {postId}}: { params: { postId: string } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'GET'
  });
  const product = await res.json();
  console.log({product})
  return (
    <Dialog
      open={true}
      fullScreen={true}
    >
      <ProductDetailPage product={product}/>
      <BackIcon isModal={true}/>
    </Dialog>

  );
};

export default Page;