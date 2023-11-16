import React from 'react';
import MarketplacePage from "@/pages/MarketplacePage";
import action from "@/app/[locale]/(current)/marketplace/action";

export const revalidate = 0;

const MarketplaceServerPage = async () => {

  const res = await fetch("http://localhost:3000/api", {
    method: "GET",
    cache: 'no-store',
    next: {
      tags: ['getPosts'],
    }
  });
  const products = await res.json();

  console.log("fetch products")
  // revalidatePath("/marketplace", 'layout')
  await action()
  return <MarketplacePage products={products.products}  />
};

export default MarketplaceServerPage;