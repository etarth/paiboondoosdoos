"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type Item = {
  company: string;
  title: string;
  location: string;
  period: string;
  description: string;
  icon?: string;
};

const experiences: Item[] = [
  {
    company: "Dribble Inc.",
    title: "Crisis Intervention Specialist",
    location: "London",
    period: "2018 – Present",
    description:
      "Minimum 3 shifts a week Monday - Friday with the ability to work an 8 to 9 hour time each week between the hours of 7 A.M. – 7 P.M.",
  },
  {
    company: "Google Inc.",
    title: "Virtual Scheduler",
    location: "London",
    period: "2001 – 2018",
    description:
      "Lines for Life also offers a great benefits package including full coverage for employee health, dental, vision, and more.",
  },
];

export default function ExperienceList() {
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
        Work experience
      </Typography>
      {experiences.map((exp, idx) => (
        <Box key={idx} sx={{ py: 1.5 }}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {exp.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exp.location} • {exp.company}
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {exp.period}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {exp.description}
          </Typography>
          {idx < experiences.length - 1 && <Divider sx={{ mt: 1.5 }} />}
        </Box>
      ))}
    </Box>
  );
}