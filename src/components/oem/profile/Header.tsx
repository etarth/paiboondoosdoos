"use client";

import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          height: 160,
          borderRadius: 2,
          background:
            "linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(220,220,220,1) 100%)",
          border: "1px solid #e5e5e5",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", mt: -6, px: 0 }}>
        <Avatar
          sx={{
            width: 72,
            height: 72,
            border: "3px solid #fff",
            bgcolor: "#999",
          }}
        />
        <Box sx={{ ml: 2, flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Elisandro Matossi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            UI/UX Designer • Elsasser Group Inc., Los Angeles, USA
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined">Save</Button>
          <Button variant="contained">Contact</Button>
        </Box>
      </Box>
    </Box>
  );
}