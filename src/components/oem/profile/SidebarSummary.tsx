"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function SidebarSummary() {
  return (
    <Box
      sx={{
        p: 2,
        mb: 3,
        borderRadius: 2,
        border: "1px solid #e5e5e5",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        $35,700 — $37,700
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Avg. salary
      </Typography>

      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <Button variant="outlined" fullWidth>
          Save
        </Button>
        <Button variant="contained" fullWidth>
          Contact
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "grid", rowGap: 1 }}>
        <Typography variant="body2">hoangle@yahoo.com • Contact Email</Typography>
        <Typography variant="body2">+64 456 869 393 • Phone</Typography>
        <Typography variant="body2">Information technology • Job functions</Typography>
        <Typography variant="body2" color="text.secondary">
          My new car is sexy, interior is nice, I enjoy changing the ambiance.
        </Typography>
      </Box>
    </Box>
  );
}