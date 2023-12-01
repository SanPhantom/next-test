import { PropsWithChildren } from "react";

export default function Layout({
  children,
  currentPost,
}: PropsWithChildren<{
  currentPost: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {currentPost}
    </>
  );
}
