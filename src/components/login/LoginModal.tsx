// Module imports (remove Dialog/Tabs/SSO related imports)
"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useAuth } from "@/components/common/AuthProvider";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const [tab, setTab] = useState(0); // 0 = Login, 1 = Sign In
  const [mode, setMode] = useState<"magic" | "password">("password");
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(username.trim(), password);
    if (ok) {
      router.push("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fff", display: "grid", placeItems: "center" }}>
      <Box
        sx={{
          width: 400,
          bgcolor: "background.paper",
          color: "text.primary",
          borderRadius: 4,
          p: 4,
          border: "1px solid",
          borderColor: "grey.300",
        }}
      >
        <Typography align="center" variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Yooo, welcome back!
        </Typography>

        <Typography align="center" variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          Use customer/test1234 or oem/test1234
        </Typography>

        <Box component="form" onSubmit={onPasswordSubmit} sx={{ display: "grid", gap: 1.5 }}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            label="Username"
            size="small"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ borderRadius: 2 }}>
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}