"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ShopsPage = () => {
  const { refresh } = useRouter();

  useEffect(() => {
    refresh();
  }, []);

  return <div>Component</div>;
};

export default ShopsPage;
