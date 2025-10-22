"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Header from "./profile/Header";
import TabsNav from "./profile/TabsNav";

export default function ProfileContent({
  name,
  company,
  slogan,
}: {
  name: string;
  company: string;
  slogan: string;
}) {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <Header name={name} company={company} slogan={slogan} />
      <Divider sx={{ my: 2 }} />

      {company.length !== 0 && (
        <>
          <TabsNav value={tab} onChange={setTab} />
          <Box sx={{ mt: 2 }}>
            {tab === 0 && <Box>Posts coming soon</Box>}
            {tab === 1 && <Box>Products coming soon</Box>}
            {tab === 2 && <Box>Services coming soon</Box>}
            {tab === 3 && <Box>About Us coming soon</Box>}
          </Box>
        </>
      )}
    </Box>
  );
}
