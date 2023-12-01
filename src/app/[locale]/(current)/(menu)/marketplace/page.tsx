import React from "react";
import MarketplacePage from "@/pages/MarketplacePage";
import { Divider, Stack, Typography } from "@mui/material";

// export const revalidate = 0;

const MarketplaceServerPage = async () => {
  const res = await fetch("http://localhost:3000/api?path=123", {
    method: "GET",
    cache: "no-store",
    next: {
      tags: ["getPosts"],
    },
  });
  const products = await res.json();

  console.log("fetch products");
  // revalidatePath("/marketplace", 'layout')
  return (
    <>
      <Stack sx={{ textAlign: "center", py: 1 }}>
        <Typography>This is marketplace page</Typography>
      </Stack>
      <Divider sx={{ borderColor: "#ffffff" }} />
      <MarketplacePage products={products.products} />
    </>
  );
};

export default MarketplaceServerPage;
