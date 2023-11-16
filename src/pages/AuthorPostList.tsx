"use client";
import React, { useCallback, useEffect, useState, useTransition } from 'react';
import ProductCard from "@/components/ProductCard";
import { useRouter } from 'next/navigation';
import { Stack, Typography } from "@mui/material";
import { useTranslations } from 'next-intl';

const AuthorPostListPage = ({products, userId}: { products: Post[], userId: string }) => {

  const t = useTranslations();

  const [isTransitionStarted, startTransition] = useTransition();

  const [isPending, setPending] = useState(false);
  const {push, refresh} = useRouter();

  const isMutating = isPending || isTransitionStarted;

  const handleClickItem = useCallback((product: Post) => {
    push(`/anthor/${product.userId}/post/${product.id}`)
  }, [push])

  useEffect(() => {
    console.log({products})
  }, [products]);

  return (
    <Stack sx={{gap: 2}}>
      <Typography>Author:  {userId}</Typography>
      {isMutating ?
        <Stack>
          <Typography>Updating</Typography>
        </Stack> :
        <Stack sx={{padding: 2, gap: 2}}>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              onClick={() => handleClickItem(product)}
            />
          ))}
        </Stack>}
    </Stack>

  );
};

export default AuthorPostListPage;