import { PropsWithChildren } from "react";

export default function Layout({
  children,
  anthor,
}: PropsWithChildren<{ anthor: React.ReactNode }>) {
  return (
    <>
      {children}
      {anthor}
    </>
  );
}
