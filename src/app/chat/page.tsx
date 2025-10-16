"use client";
import { useState } from "react";
import { FriendList, Friend } from "../../components/chat/FriendList";

const Index = () => {
  const [loading, setLoading] = useState(false);

  const mockFriends: Friend[] = [
    {
      id: "1",
      name: "Alice Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      isOnline: true,
      lastMessage: "Hey! Are we still on for coffee tomorrow?",
      lastActive: "2m ago",
      unreadCount: 3,
    },
    {
      id: "2",
      name: "Bob Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      isOnline: true,
      lastMessage: "Thanks for the help with the project!",
      lastActive: "15m ago",
      unreadCount: 1,
    },
    {
      id: "3",
      name: "Charlie Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
      isOnline: false,
      lastMessage: "See you next week 👋",
      lastActive: "2h ago",
    },
    {
      id: "4",
      name: "Diana Prince",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana",
      isOnline: true,
      lastMessage: "Did you see the latest update?",
      lastActive: "5m ago",
      unreadCount: 7,
    },
    {
      id: "5",
      name: "Ethan Hunt",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan",
      isOnline: false,
      lastMessage: "Mission accomplished! 🎯",
      lastActive: "1d ago",
    },
    {
      id: "6",
      name: "Fiona Gallagher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fiona",
      isOnline: true,
      lastMessage: "Let me know when you're free to chat",
      lastActive: "30m ago",
      unreadCount: 2,
    },
    {
      id: "7",
      name: "George Miller",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=George",
      isOnline: false,
      lastMessage: "Great working with you!",
      lastActive: "3d ago",
    },
    {
      id: "8",
      name: "Hannah Baker",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hannah",
      isOnline: true,
      lastMessage: "Check out this cool article I found",
      lastActive: "1h ago",
      unreadCount: 12,
    },
  ];

  const handleFriendSelect = (friendId: string) => {
    console.log("Selected friend:", friendId);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-5xl flex flex-col flex-grow">
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
