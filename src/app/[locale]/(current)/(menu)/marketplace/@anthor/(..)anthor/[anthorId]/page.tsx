import React from "react";
import AuthorPostListPage from "@/pages/AuthorPostList";
import BackIcon from "@/components/BackIcon";
import { Dialog, Stack } from "@mui/material";

const AuthorPage = async ({
  params: { anthorId },
}: {
  params: { anthorId: string };
}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${anthorId}`,
    {
      method: "GET",
      cache: "no-store",
      next: {
        tags: ["getAnthorPosts"],
      },
    }
  );
  const posts = await res.json();
  return (
    <Dialog open fullScreen sx={{ height: "100vh" }}>
      <BackIcon isModal={true} path="/marketplace" />
      <AuthorPostListPage products={posts} userId={anthorId} />
    </Dialog>
  );
};

export default AuthorPage;
