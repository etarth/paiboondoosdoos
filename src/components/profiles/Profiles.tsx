"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Container, Stack } from "@mui/material";

export default function ProfileBar() {
  return (
    <>
      <Box sx={{ bgcolor: "#1a1a1a", height: "30vh", pt: 0.25 }}>
        <Stack direction="row">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 65, height: 65, m: 2 }}
          />
          <Box sx={{ m: 2, pl: 3 }}>
            <Typography sx={{ mb: 0.3, color: "white", fontSize: 20 }}>
              User Name : Jhon Doe
            </Typography>
            <Typography sx={{ mb: 0.3, color: "white", fontSize: 20 }}>
              Email : JhonDoe@gmail.com
            </Typography>
            <Typography sx={{ color: "white", fontSize: 20 }}>
              Tel : 099-999-9999
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
