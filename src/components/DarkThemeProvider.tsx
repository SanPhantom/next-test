"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import type { PropsWithChildren } from "react";

const DarkThemeProvider = (props: PropsWithChildren) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default DarkThemeProvider;
