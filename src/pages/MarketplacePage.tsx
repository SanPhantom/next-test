"use client";
import React, { useCallback, useEffect, useState, useTransition } from 'react';
import ProductCard from "@/components/ProductCard";
import { useRouter } from 'next/navigation';
import { Stack, Typography } from "@mui/material";
import { useTranslations } from 'next-intl';

const MarketplacePage = ({products}: { products: Post[] }) => {

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

  useEffect(() => {
    setPending(true)
    startTransition(refresh)
    setPending(false)
  }, [refresh]);

  return (
    <Stack sx={{gap: 2}}>
      <Typography>{t("title")}</Typography>
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
              showAuthor={true}
              onClickAuthor={() => {
                push(`/anthor/${product.userId}`)
              }}
            />
          ))}
        </Stack>}
    </Stack>

  );
};

export default MarketplacePage;