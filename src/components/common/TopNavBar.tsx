import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useAuth } from "./AuthProvider";

export default function TopNavBar() {
  const { role, logout } = useAuth();
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.5 }}>
        doosdoos
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Typography variant="body2" sx={{ mr: 2 }}>
        {role === "guest" ? "Guest" : role === "customer" ? "Customer" : "OEM"}
      </Typography>
      {role === "guest" ? (
        <Button component={Link} href="/login" color="inherit">
          Login
        </Button>
      ) : (
        <Button onClick={logout} color="inherit">
          Logout
        </Button>
      )}
    </Box>
  );
}