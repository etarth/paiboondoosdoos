"use client";

import OrderHistory from "@/components/orderhistory/OrderHistory";
import ProfileBar from "@/components/profiles/Profiles";
import { Typography } from "@mui/material";
import { useAuth } from "@/components/common/AuthProvider";

export default function UserProfilePage() {
  const { role } = useAuth();

  if (role !== "customer") {
    return null;
  }

  return (
    <>
      <ProfileBar />
      <Typography variant="h4" sx={{ mt: 2 }}>
        Order History
      </Typography>
      <OrderHistory />
    </>
  );
}
