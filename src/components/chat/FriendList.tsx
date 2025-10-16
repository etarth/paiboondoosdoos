"use client";
import { useState, useEffect, useMemo, useRef, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Skeleton } from "../../components/ui/skeleton";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export interface Friend {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
  lastMessage?: string;
  lastActive?: string;
  unreadCount?: number;
}

interface FriendListProps {
  friends?: Friend[];
  loading?: boolean;
  onFriendSelect?: (friendId: string) => void;
}

export const FriendList = ({
  friends = [],
  loading = false,
  onFriendSelect,
}: FriendListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const router = useRouter();
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter friends based on search
  const filteredFriends = useMemo(() => {
    if (!debouncedQuery.trim()) return friends;

    const query = debouncedQuery.toLowerCase();
    return friends.filter(
      (friend) =>
        friend.name.toLowerCase().includes(query) ||
        friend.lastMessage?.toLowerCase().includes(query)
    );
  }, [friends, debouncedQuery]);

  // Reset focus when filter changes
  useEffect(() => {
    setFocusedIndex(-1);
  }, [filteredFriends.length]);

  const handleFriendClick = (friendId: string) => {
    if (onFriendSelect) {
      onFriendSelect(friendId);
    }
    router.push(`/chat/${friendId}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (filteredFriends.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev < filteredFriends.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < filteredFriends.length) {
          handleFriendClick(filteredFriends[focusedIndex].id);
        }
        break;
    }
  };

  // Scroll focused item into view
  useEffect(() => {
    if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [focusedIndex]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <div className="flex h-full flex-col bg-card">
        <div className="p-4 border-b border-border">
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex-1 p-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-3 mb-2">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-48" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-full flex-col bg-card"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Search Bar */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search friends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Friends List */}
      <ScrollArea className="flex-1" ref={listRef}>
        {filteredFriends.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-muted-foreground">
            <p>No friends found</p>
          </div>
        ) : (
          <div className="p-2">
            {filteredFriends.map((friend, index) => (
              <div
                key={friend.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => handleFriendClick(friend.id)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all",
                  "hover:bg-chat-hover",
                  focusedIndex === index &&
                    "bg-chat-hover ring-2 ring-ring ring-offset-2"
                )}
              >
                {/* Avatar with Online Badge */}
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={friend.avatar} alt={friend.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(friend.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={cn(
                      "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card",
                      friend.isOnline ? "bg-online" : "bg-offline"
                    )}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm truncate">
                      {friend.name}
                    </h4>
                    {friend.lastActive && (
                      <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                        {friend.lastActive}
                      </span>
                    )}
                  </div>
                  {friend.lastMessage && (
                    <p className="text-sm text-muted-foreground truncate">
                      {friend.lastMessage}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};
