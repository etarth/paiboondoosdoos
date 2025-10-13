"use client";

import React from "react";
import { useAuth } from "@/components/common/AuthProvider";
import ChatContent from "@/components/chat/ChatContent";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ChatPage() {
  const { role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (role === "guest") {
      router.replace("/login");
    }
  }, [role, router]);

  if (role === "guest") {
    return null;
  }

  return <ChatContent />;
}