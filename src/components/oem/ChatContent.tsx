"use client";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { FriendList } from "@/components/chat/FriendList";
import { mockFriends } from "@/data/mockFriends";
import { useRouter } from "next/navigation";

export default function OemChatContent() {
  const router = useRouter();
  const [loading] = useState(false);

  const handleFriendSelect = (friendId: string) => {
    router.push(`/oem/chat/${friendId}`);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-background items-start">
      <div className="w-full flex flex-col flex-grow">
        <div className="mb-6 text-start">
          <h1 className="text-4xl font-bold mb-2">Chats</h1>
          <p className="text-muted-foreground text-lg">
            Browse conversations and connect with customers
          </p>
        </div>

        <div className="flex-grow rounded-xl border border-border shadow-lg overflow-hidden bg-card">
          <FriendList
            friends={mockFriends}
            loading={loading}
            onFriendSelect={handleFriendSelect}
          />
        </div>
      </div>
    </div>
  );
}