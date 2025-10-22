"use client";
import { useState } from "react";
import { FriendList } from "../../components/chat/FriendList";
import { mockFriends } from "@/data/mockFriends";

const Index = () => {
  const [loading] = useState(false);

  const handleFriendSelect = (friendId: string) => {
    console.log("Selected friend:", friendId);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center w-full">
      <div className="w-full flex flex-col flex-grow">
        {/* Header */}
        <div className="mb-6 text-start">
          <h1 className="text-4xl font-bold mb-2">Friend List</h1>
          <p className="text-muted-foreground text-lg">
            Search and navigate through your friends using keyboard or mouse
          </p>
        </div>

        {/* Friend list container */}
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
};

export default Index;
