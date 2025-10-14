"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function BioCard() {
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
        Bio profile
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
          rowGap: 1,
          columnGap: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">Company name</Typography>
        <Typography variant="body2">Elsasser Group Inc.</Typography>

        <Typography variant="body2" color="text.secondary">Description</Typography>
        <Typography variant="body2">
          We design and manufacture high-quality OEM products with a focus on usability and
          sustainable materials.
        </Typography>

        <Typography variant="body2" color="text.secondary">Company size</Typography>
        <Typography variant="body2">200–500 employees</Typography>

        <Typography variant="body2" color="text.secondary">Type</Typography>
        <Typography variant="body2">Cosmetic, F&amp;B</Typography>

        <Typography variant="body2" color="text.secondary">Product</Typography>
        <Typography variant="body2">Skin care, hair care, beverage</Typography>

        <Typography variant="body2" color="text.secondary">MOQ</Typography>
        <Typography variant="body2">1,000 units</Typography>

        <Typography variant="body2" color="text.secondary">Certification</Typography>
        <Typography variant="body2">Halal, FDA</Typography>

        <Typography variant="body2" color="text.secondary">Contract</Typography>
        <Typography variant="body2">OEM / ODM</Typography>

        <Typography variant="body2" color="text.secondary">Awards</Typography>
        <Typography variant="body2">Best Design 2023, Innovation Award 2024</Typography>

        <Typography variant="body2" color="text.secondary">Company review</Typography>
        <Typography variant="body2">4.5 / 5 average customer rating</Typography>

        <Typography variant="body2" color="text.secondary">History transaction</Typography>
        <Typography variant="body2">125 orders fulfilled</Typography>
      </Box>
    </Box>
  );
}