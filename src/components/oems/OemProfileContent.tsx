"use client";

import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { mockOEMs } from "@/data/mockOEMs";
import { OEM } from "@/types/oem";
import { Divider } from "@mui/material";
import { Box } from "lucide-react";
import NextImage from "next/image";
export default function OemProfileContent({ id }: { id: string }) {
  const oem = mockOEMs.find((oem) => oem.id === id);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  });
  if (!load) {
    return (
      <Typography variant="h4" fontWeight="bold">
        Loading ...
      </Typography>
    );
  }
  if (!oem) {
    return (
      <Typography color="error" variant="h6">
        OEM not found.
      </Typography>
    );
  }
  return (
    <>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold" }}>
        {oem.name}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        {oem.country} • {oem.region}
      </Typography>
      <Box>
        {" "}
        <NextImage
          src="doosdoos_wordmark.svg"
          alt={oem.name}
          width={500}
          height={500}
        />
      </Box>
      <Divider sx={{ mb: 2 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Description:</strong> {oem.description}
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>History:</strong> {oem.history}
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Why choose this OEM:</strong> {oem.sellingNarrative}
      </Typography>

      <Typography variant="body2" sx={{ mt: 2 }}>
        <strong>Certifications:</strong> {oem.certifications.join(", ")}
      </Typography>

      <Typography variant="body2">
        <strong>MOQ:</strong> {oem.moq} • <strong>Delivery Time:</strong>{" "}
        {oem.deliveryTime}
      </Typography>

      <Typography variant="body2">
        <strong>Website:</strong>{" "}
        <a href={oem.website} target="_blank" rel="noopener noreferrer">
          {oem.website}
        </a>
      </Typography>
    </>
  );
}
