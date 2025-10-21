"use client";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Container,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export default function LandingPage() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgba(255, 255, 255, 1)"
      gradientBackgroundEnd="rgba(255, 255, 255, 1)"
      firstColor="36, 197, 225"
      secondColor="82, 163, 255"
      thirdColor="138, 112, 255"
      fourthColor="255, 143, 248"
      fifthColor="255, 189, 224"
      pointerColor="255, 255, 255"
      interactive={false}
      containerClassName="relative w-full h-[85vh] rounded-lg overflow-hidden"
    >
      <Box
        sx={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "transparent",
          color: "#1a1a1a",
          fontFamily: "Inter, sans-serif",
          position: "relative",
          borderRadius: "16px",
          marginBottom: "20px",
          zIndex: 10,
        }}
      >
        {/* Main Section */}
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 300,
              mb: 2,
              mt: 4,
              color: "#696969ff",
              textShadow: "0px 0px 8px rgba(0,0,0,0.05)",
            }}
          >
            Find Your Perfect <span style={{ color: "#000000ff", fontWeight: 600 }}>OEM</span> Partner
          </Typography>

          {/* Search Input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 5,
            }}
          >
            <TextField
              placeholder="What's on your mind?"
              fullWidth
              sx={{
                maxWidth: 600,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "30px",
                input: { color: "rgba(0, 0, 0, 0.9)" },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #d3d3d3",
                  borderRadius: "30px",
                },
                boxShadow: `
                  inset 2px 2px 1px 0 rgba(255, 255, 255, 0.2),
                  inset -2px -2px 2px 1px rgba(255, 255, 255, 0.2),
                  0 4px 8px 0 rgba(0, 0, 0, 0.1),
                  0 6px 20px 0 rgba(0, 0, 0, 0.1)
                `,
                backdropFilter: "blur(4px)",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton color="inherit">
                      <MicIcon sx={{ color: "#1b1b1bff" }} />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "20px",
                        textTransform: "none",
                        background: "#1b1b1bff",
                        "&:hover": { background: "#555555ff" },
                      }}
                      startIcon={<SearchIcon />}
                    >
                      Search
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Learn More Button */}
          <Button
            variant="text"
            sx={{
              position: "absolute",
              bottom: 30,
              right: 40,
              color: "#333",
              opacity: 0.8,
              textTransform: "none",
              "&:hover": { opacity: 1, color: "#000" },
            }}
          >
            Start Exploring →
          </Button>
      
      </Container>
    </Box>
    </BackgroundGradientAnimation>
  );
}
