import React from "react";

export default function CurrentLayout(props: {children: React.ReactNode, anthor: React.ReactNode}) {
  return (
    <>
      {props.children}
      {props.anthor}
    </>
  )
}