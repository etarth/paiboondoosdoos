import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

export default function TopNavBar() {
  const { role, logout } = useAuth();
  const router = useRouter();
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.5 }}>
        doosdoos
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Button
        onClick={() => {
          if (role === "customer") {
            router.push("/customer/profile");
          } else if (role === "oem") {
            router.push("/oem/profile");
          }
        }}
        sx={{ mr: 2 }}
      >
        <Typography variant="body2">
          {role === "guest" ? "Guest" : role === "customer" ? "Customer" : "OEM"}
        </Typography>
      </Button>

      {role === "guest" ? (
        <Button component={Link} href="/login" color="inherit">
          Login
        </Button>
      ) : (
        <Button
          onClick={() => {
            logout();
            router.push("/");
          }}
          color="inherit"
        >
          Logout
        </Button>
      )}
    </Box>
  );
}
