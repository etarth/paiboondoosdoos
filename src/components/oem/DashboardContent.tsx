"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Dashboard from "./dashboard/Dashboard";

export default function DashboardContent() {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Dashboard />
    </>
  );
}