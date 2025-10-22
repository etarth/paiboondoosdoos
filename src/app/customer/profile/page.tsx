"use client";

import OrderHistory from "@/components/orderhistory/OrderHistory";
import { Typography } from "@mui/material";
import { useAuth } from "@/components/common/AuthProvider";
import ProfileContent from "@/components/oem/ProfileContent";

export default function UserProfilePage() {
  const { role } = useAuth();

  if (role !== "customer") {
    return null;
  }

  return (
    <>
      <ProfileContent
        name="DoosDoos"
        company=""
        slogan="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates est beatae libero veniam dolorum numquam ad molestias, quod deleniti? Quos cumque amet fuga facere. Quam porro deserunt aliquid eligendi. Tempore."
      />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Order History
      </Typography>
      <OrderHistory />
    </>
  );
}
