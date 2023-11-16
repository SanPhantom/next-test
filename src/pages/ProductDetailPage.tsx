"use client";
import React, { useCallback } from 'react';
import { Stack, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const ProductDetailPage = ({product}: {product: Post}) => {

  const { replace, back } = useRouter();

  const handleBack = useCallback(() => {
    replace("/marketplace")
    // back()
  }, [replace, back])

  return (
    <Stack sx={{p: 2, gap: 2}}>
      <Typography>{product.title}</Typography>

      <Typography>{product.body}</Typography>

      <Typography>Author: ${product.userId}</Typography>

    </Stack>
  );
};

export default ProductDetailPage;