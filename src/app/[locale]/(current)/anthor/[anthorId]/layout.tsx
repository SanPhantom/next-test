import React from "react";

export default function CurrentLayout(props: {children: React.ReactNode; post: React.ReactNode}) {
  console.log("init author layout")
  return (
    <>
      {props.children}
      {props.post}
    </>
  )
}