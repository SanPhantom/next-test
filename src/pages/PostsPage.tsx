"use client";

import ProductCard from "@/components/ProductCard";
import UserCard from "@/components/UserCard";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface PostsPageProps {
  products: Post[];
}

const PostsPage = ({ products }: PostsPageProps) => {
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
          <ProductCard post={user} key={user.id} showAuthor />
        ))}
      </Stack>
    </Stack>
  );
};

export default PostsPage;
