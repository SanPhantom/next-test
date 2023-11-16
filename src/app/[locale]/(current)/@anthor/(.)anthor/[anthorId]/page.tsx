import React from 'react';
import AuthorPostListPage from "@/pages/AuthorPostList";
import { Dialog } from "@mui/material";
import BackIcon from "@/components/BackIcon";

const AuthorPage = async ({params: {anthorId}}: {params: {anthorId: string}}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${anthorId}`, {
    method: "GET",
    cache: 'no-store',
    next: {
      tags: ['getPosts'],
    }
  });
  const posts = await res.json();
  return (
    <Dialog open={true} fullScreen={true}>
      <BackIcon isModal={true} />
      <AuthorPostListPage products={posts} userId={anthorId} />
    </Dialog>

  );
};

export default AuthorPage;