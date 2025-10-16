"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Container, Stack } from "@mui/material";

export default function ProfileBar() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          height: "30vh",
          pt: 0.25,
          border: "1px solid",
          borderRadius: 5,
        }}
      >
        <Stack direction="row">
          <Avatar
            alt="Jhon Doe"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 70, height: 70, m: 2 }}
          />
          <Box sx={{ m: 2, pl: 2 }}>
            <Typography sx={{ mb: 0.3, fontSize: 20 }}>
              User Name : Jhon Doe
            </Typography>
            <Typography sx={{ mb: 0.3, fontSize: 20 }}>
              Email : JhonDoe@gmail.com
            </Typography>
            <Typography sx={{ fontSize: 20 }}>Tel : 099-999-9999</Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
