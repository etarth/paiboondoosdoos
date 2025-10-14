"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const skills = [
  "Business",
  "Marketing",
  "Development",
  "Founder",
  "HTML",
  "Interface Design",
  "University",
  "Entrepreneur",
];

export default function Skills() {
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
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
        Skills
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {skills.map((s) => (
          <Chip
            key={s}
            label={s}
            variant="outlined"
            sx={{ borderColor: "#e5e5e5" }}
          />
        ))}
      </Box>
    </Box>
  );
}