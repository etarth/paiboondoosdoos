"use client";

import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Chip from "@mui/material/Chip";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useAuth } from "@/components/common/AuthProvider";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

export default function Header({
  name,
  company,
  slogan,
}: {
  name: string;
  company: string;
  slogan: string;
}) {
  const { role } = useAuth();

  return (
    <Box>
      {/* Banner with bottom fade */}
      <Box
        sx={{
          position: "relative",
          height: 260,
          borderRadius: 2,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "#efefef",
            backgroundImage:
              "linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(225,225,225,1) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "45%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 70%, rgba(255,255,255,1) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      </Box>

      {/* Avatar + identity + actions */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 2,
          px: 2,
          mt: -6,
          position: "relative",
          zIndex: 10,
        }}
      >
        <Avatar
          sx={{
            width: 84,
            height: 84,
            borderRadius: 4,
            border: "4px solid #fff",
            bgcolor: "#999",
          }}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "between",
            width: "100%",
          }}
          className="flex w-full justify-between items-center gap-2"
        >
          <div>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {name}
              </Typography>
              <VerifiedOutlinedIcon sx={{ fontSize: 18, color: "#6B6B6B" }} />
            </Box>
            <Typography variant="body2" color="text.secondary">
              {company}
            </Typography>{" "}
            {/* Industry and company size */}
            {company.length === 0 ? (
              <></>
            ) : (
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Chip label="F&B" variant="outlined" size="small" />
                <Chip label="Small size" variant="outlined" size="small" />
              </Box>
            )}
          </div>

          {/* actions under text, circular icons */}
          <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
            {role === "oem" ? (
              <Button
                variant="outlined"
                aria-label="Edit profile"
                sx={{
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  minWidth: 40,
                  p: 0,
                }}
              >
                <EditOutlinedIcon />
              </Button>
            ) : (
              <>
                <Button
                  variant="contained"
                  aria-label="Message"
                  sx={{
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    minWidth: 40,
                    p: 0,
                  }}
                >
                  <MailOutlineIcon />
                </Button>
                <Button
                  variant="outlined"
                  aria-label="Favorite"
                  sx={{
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    minWidth: 40,
                    p: 0,
                  }}
                >
                  <FavoriteBorderIcon />
                </Button>
              </>
            )}
          </Stack>
        </Box>
      </Box>

      {/* Bio */}
      <Box
        sx={{
          mt: 2,
          p: 2,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="body2">{slogan}</Typography>
      </Box>

      {/* Certifications */}
      {company.length === 0 ? (
        <></>
      ) : (
        <Box sx={{ padding: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
            Certifications
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {["GMP", "HACCP", "Halal", "EMS", "Green Industry II"].map(
              (label) => (
                <Chip
                  key={label}
                  label={label}
                  variant="outlined"
                  size="small"
                  sx={{ borderColor: "#e5e5e5" }}
                />
              )
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
