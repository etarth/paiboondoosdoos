"use client";

import React from "react";
import OemListContent from "@/components/oems/OemListContent";
import { Typography } from "@mui/material";

export default function OemListPage() {
  return (
    <>
      {" "}
      <Typography variant="h3" sx={{ mb: 2 }}>
        OEM List
      </Typography>
      <OemListContent />;
    </>
  );
}
