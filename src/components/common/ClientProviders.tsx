"use client";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./AuthProvider";
import AppLayout from "./AppLayout";
import { usePathname } from "next/navigation";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#111111", contrastText: "#FFFFFF" },
      secondary: { main: "#666666", contrastText: "#FFFFFF" },
      background: { default: "#FFFFFF", paper: "#FFFFFF" },
      text: { primary: "#111111", secondary: "#6B6B6B" },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
            color: "#111111",
            boxShadow: "none",
            borderBottom: "1px solid #e5e5e5",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: { backgroundColor: "#FFFFFF" },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "none" },
          contained: {
            backgroundColor: "#111111",
            color: "#FFFFFF",
            "&:hover": { backgroundColor: "#000000" },
          },
          outlined: {
            borderColor: "#444444",
            color: "#111111",
            "&:hover": { borderColor: "#222222", backgroundColor: "#F0F0F0" },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: { color: "#111111" },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: { backgroundColor: "#EEEEEE", color: "#111111" },
          icon: { color: "#111111" },
        },
      },
    },
  });

  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isLogin ? children : <AppLayout>{children}</AppLayout>}
      </ThemeProvider>
    </AuthProvider>
  );
}