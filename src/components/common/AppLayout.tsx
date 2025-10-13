"use client";

import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

const drawerWidth = 240;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (t) => t.zIndex.drawer + 1,
          backgroundColor: "#FFFFFF",
          color: "#111111",
          boxShadow: "none",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Toolbar>
          <TopNavBar />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", top: "64px" },
        }}
      >
        <SideNavBar />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "64px", ml: `${drawerWidth}px` }}>
        {children}
      </Box>
    </Box>
  );
}