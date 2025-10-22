"use client";

import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./AuthProvider";

export default function SideNavBar() {
  const pathname = usePathname();
  const { role } = useAuth();
  const isOem = role === "oem";

  const oemItems = [
    { label: "Dashboard", href: "/oem/dashboard" },
    { label: "Profile", href: "/oem/profile" },
    { label: "Chat", href: "/oem/chat" },
  ];

  // For non-OEM users:
  // - Guests: Home, OEM List (no Chat, no sample OEM Profile)
  // - Customers: Home, Chat, OEM List
  const userItems = role === "customer"
    ? [
        { label: "Home", href: "/" },
        { label: "Profile", href: "/customer/profile" },
        { label: "Chat", href: "/chat" },
        { label: "OEM List", href: "/oems" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "OEM List", href: "/oems" },
      ];

  return (
    <>
      <List>
        {(isOem ? oemItems : userItems).map((item) => (
          <ListItemButton
            key={item.href}
            component={Link}
            href={item.href}
            selected={pathname === item.href}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
    </>
  );
}