"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Edu = {
  school: string;
  field: string;
  location: string;
  period: string;
};

const education: Edu[] = [
  {
    school: "Harvard University",
    field: "Business Development",
    location: "London",
    period: "1994 – 1998",
  },
];

export default function EducationList() {
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
        Education
      </Typography>
      {education.map((e, idx) => (
        <Box key={idx} sx={{ py: 1.5 }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {e.school}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {e.location} • {e.field}
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {e.period}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}