import React from "react";
import AuthorPostListPage from "@/pages/AuthorPostList";
import BackIcon from "@/components/BackIcon";

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
  console.log("fetch ===>", anthorId);
  return (
    <>
      <BackIcon isModal={false} path="/marketplace" />
      <AuthorPostListPage products={posts} userId={anthorId} />
    </>
  );
};

export default AuthorPage;
