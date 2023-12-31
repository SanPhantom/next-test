"use client";
import React, { useCallback } from "react";
import UserCard from "@/components/UserCard";
import { useRouter } from "next/navigation";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";

const MarketplacePage = ({ products }: { products: User[] }) => {
  const t = useTranslations();

  const router = useRouter();

  const handleClickItem = useCallback(
    (user: User) => {
      console.log("render", user);
      router.push(`/anthor/${user.id}`);
    },
    [router]
  );

  return (
    <Stack sx={{ gap: 2 }}>
      <Stack sx={{ padding: 2, gap: 2 }}>
        {products.map((user) => (
          <UserCard
            user={user}
            key={user.id}
            onClick={() => handleClickItem(user)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default MarketplacePage;
