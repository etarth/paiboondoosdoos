"use client";
import { useState } from "react";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { Message, ChatPartner } from "@/types/chat";

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
    text: "Hello! Thank you for reaching out. I'd be happy to help you with custom parts. What specifications are you looking for?",
    timestamp: new Date(Date.now() - 3540000).toISOString(),
  },
  {
    id: "3",
    sender: "Customer",
    text: "We need aluminum brackets with precise tolerances. Can you handle orders of around 500 units?",
    timestamp: new Date(Date.now() - 3480000).toISOString(),
  },
  {
    id: "4",
    sender: "OEM",
    text: "Absolutely! We specialize in precision aluminum components. 500 units is well within our capacity. Could you share the technical drawings or specifications?",
    timestamp: new Date(Date.now() - 3420000).toISOString(),
  },
  {
    id: "5",
    sender: "Customer",
    text: "Great! I'll send over the CAD files. What's the typical lead time for this type of order?",
    timestamp: new Date(Date.now() - 3360000).toISOString(),
  },
  {
    id: "6",
    sender: "OEM",
    text: "For 500 units with standard finishing, we're looking at approximately 3-4 weeks from order confirmation. I can provide a more accurate timeline once I review your specifications.",
    timestamp: new Date(Date.now() - 3300000).toISOString(),
  },
];

const chatPartner: ChatPartner = {
  name: "TechManufacturing Co.",
  role: "OEM Partner",
  isOnline: true,
};

const ChatFriendPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "Customer",
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate OEM response after a short delay
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: "OEM",
        text: "Thank you for your message. Our team will review this and get back to you shortly.",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, response]);
    }, 1500);
  };

  return (
    <ChatWindow
      partner={chatPartner}
      messages={messages}
      onSendMessage={handleSendMessage}
    />
  );
};

export default ChatFriendPage;
