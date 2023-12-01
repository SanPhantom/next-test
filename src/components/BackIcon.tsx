"use client";
import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { useParams, useRouter } from "next/navigation";

const BackIcon = ({
  isModal,
  path = "/",
}: {
  isModal: boolean;
  path?: string;
}) => {
  const router = useRouter();

  console.log({ isModal });

  const handleBack = useCallback(() => {
    if (isModal) {
      router.back();
    } else {
      router.replace(path);
    }
  }, [isModal, path, router]);

  return (
    <Button
      variant="contained"
      sx={{ textTransform: "unset" }}
      onClick={handleBack}
    >
      Go back
    </Button>
  );
};

export default BackIcon;
