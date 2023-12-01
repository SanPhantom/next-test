import BottomRouter from "@/components/BottomRouter";
import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material";

import React from "react";

export default function MenuLayout(props: { children: React.ReactNode }) {
  return (
    <Stack sx={{ width: "100%", height: "100vh" }}>
      <Stack sx={{ flex: 1, minHeight: 0, overflow: "auto" }}>
        {props.children}
      </Stack>
      <BottomRouter />
    </Stack>
  );
}
