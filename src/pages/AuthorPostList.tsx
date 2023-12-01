"use client";
import React, { useCallback, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/navigation";
import { Button, Divider, Stack, Typography } from "@mui/material";

const AuthorPostListPage = ({
  products,
  userId,
}: {
  products: Post[];
  userId: string;
}) => {
  const { push } = useRouter();

  return (
    <Stack sx={{ gap: 2, alignItems: "center", p: 2 }}>
      <Typography>Author: {userId}</Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => push("/shops")}
      >
        to shop
      </Button>

      <Divider sx={{ borderColor: "#ffffff", width: "100%", mx: -2 }} />

      <Stack sx={{ gap: 1.5 }}>
        {products.map((product) => {
          return <ProductCard key={product.id} post={product} />;
        })}
      </Stack>
    </Stack>
  );
};

export default AuthorPostListPage;
