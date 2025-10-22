"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Dashboard from "./dashboard/Dashboard";

export default function DashboardContent() {
  return (
    <>
      <text className="text-4xl font-black mb-2" >
        Dashboard
      </text>
      <Dashboard />
    </>
  );
}