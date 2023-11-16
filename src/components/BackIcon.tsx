"use client";
import React, { useCallback } from 'react';
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const BackIcon = ({isModal}: {isModal: boolean}) => {
  
  const { replace, back } = useRouter();

  console.log({isModal})

  const handleBack = useCallback(() => {
    if (isModal) {
      back()
    } else {
      replace('/marketplace');
    }
  }, [back, isModal, replace])

  return (
    <Button variant="contained" sx={{ textTransform: 'unset' }} onClick={handleBack}>Go back</Button>
  );
};

export default BackIcon;