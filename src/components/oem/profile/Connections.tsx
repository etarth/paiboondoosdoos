"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const connections = [
  { name: "Trashae Hubbard", title: "Crisis Specialist" },
  { name: "Xian Zhou", title: "Virtual Scheduler" },
  { name: "Alexa Tenorio", title: "Patient Care Advocate" },
  { name: "Alex Walker", title: "Virtual Scheduler" },
  { name: "Fátima Cambeiro", title: "Patient Care Advocate" },
];

export default function Connections() {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        border: "1px solid #e5e5e5",
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, flexGrow: 1 }}>
          Connections
        </Typography>
        <Button variant="text">See all</Button>
      </Box>

      <Box sx={{ display: "grid", rowGap: 1.5 }}>
        {connections.map((c, idx) => (
          <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "#bbb" }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {c.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {c.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}