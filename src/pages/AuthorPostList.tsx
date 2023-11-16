"use client";
import React, { useCallback, useEffect } from 'react';
import ProductCard from "@/components/ProductCard";
import { useRouter } from 'next/navigation';
import { Stack, Typography } from "@mui/material";

const AuthorPostListPage = ({products, userId}: { products: Post[], userId: string }) => {

  const {push} = useRouter();


  const handleClickItem = useCallback((product: Post) => {
    push(`/anthor/${product.userId}/post/${product.id}`)
  }, [push])

  useEffect(() => {
    console.log({products})
  }, [products]);

  return (
    <Stack sx={{gap: 2}}>
      <Typography>Author:  {userId}</Typography>
        <Stack sx={{padding: 2, gap: 2}}>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              onClick={() => handleClickItem(product)}
            />
          ))}
        </Stack>
    </Stack>

  );
};

export default AuthorPostListPage;