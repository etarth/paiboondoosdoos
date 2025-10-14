"use client";

import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

type Props = {
  value: number;
  onChange: (val: number) => void;
};

export default function TabsNav({ value, onChange }: Props) {
  const handleChange = (_: React.SyntheticEvent, newValue: number) => onChange(newValue);
  return (
    <Box sx={{ px: 1 }}>
      <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="primary">
        <Tab label="Posts" />
        <Tab label="Products" />
        <Tab label="Services" />
        <Tab label="About Us" />
      </Tabs>
    </Box>
  );
}