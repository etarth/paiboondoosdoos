"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { Message, ChatPartner } from "@/types/chat";
import { mockFriends } from "@/data/mockFriends";

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "Customer",
    text: "Hi! I'm interested in ordering custom parts for our manufacturing line.",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "2",
    sender: "OEM",
    text: "Hello! Happy to help. What specifications are you looking for?",
    timestamp: new Date(Date.now() - 3540000).toISOString(),
  },
  {
    id: "3",
    sender: "Customer",
    text: "We need aluminum brackets with precise tolerances. Could you do ~500 units?",
    timestamp: new Date(Date.now() - 3480000).toISOString(),
  },
  {
    id: "4",
    sender: "OEM",
    text: "Absolutely. 500 units is fine. Please share your drawings or specs.",
    timestamp: new Date(Date.now() - 3420000).toISOString(),
  },
];

const defaultPartner: ChatPartner = {
  name: "Prospective Customer",
  role: "Customer",
  isOnline: true,
};

export default function OemChatConversationPage() {
  const params = useParams();
  const id = params?.id ?? "";

  const friend = mockFriends.find((f) => f.id === id);

  const partner: ChatPartner = {
    name: friend?.name ?? defaultPartner.name,
    role: defaultPartner.role,
    isOnline: friend?.isOnline ?? defaultPartner.isOnline,
  };

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "OEM",
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: "Customer",
        text: "Thanks! I’ll gather requirements and send details shortly.",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, response]);
    }, 1500);
  };

  return (
    <ChatWindow
      partner={partner}
      messages={messages}
      onSendMessage={handleSendMessage}
    />
  );
}