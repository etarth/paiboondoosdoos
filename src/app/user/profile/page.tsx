"use client";

import OrderHistory from "@/components/orderhistory/OrderHistory";
import ProfileBar from "@/components/profiles/Profiles";
import { Typography } from "@mui/material";

export default function UserProfilePage() {
  return (
    <>
      <ProfileBar />
      <Typography variant="h4" sx={{ my: 2 }}>
        Order History
      </Typography>
      <OrderHistory />
    </>
  );
}
