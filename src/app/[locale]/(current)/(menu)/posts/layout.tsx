import { PropsWithChildren } from "react";

export default function Layout({
  children,
  anthorPost,
  currentPost,
}: PropsWithChildren<{
  anthorPost: React.ReactNode;
  currentPost: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {anthorPost}
      {currentPost}
    </>
  );
}
