import React from "react";
import ShopsPage from "@/pages/ShopsPage";
import BottomRouter from "@/components/BottomRouter";
import { Stack } from "@mui/material";

const ShopsServerPage = async () => {
  return (
    <Stack sx={{ width: "100%", height: "100vh" }}>
      <Stack sx={{ flex: 1, minHeight: 0, overflow: "auto" }}>
        <ShopsPage />
      </Stack>
      <BottomRouter />
    </Stack>
  );
};

export default ShopsServerPage;
