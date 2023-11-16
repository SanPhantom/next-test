"use client";
import React from 'react';
import { Stack, Typography } from "@mui/material";

const ProductDetailPage = ({product}: {product: Post}) => {

  return (
    <Stack sx={{p: 2, gap: 2}}>
      <Typography>{product.title}</Typography>

      <Typography>{product.body}</Typography>

      <Typography>Author: ${product.userId}</Typography>

    </Stack>
  );
};

export default ProductDetailPage;