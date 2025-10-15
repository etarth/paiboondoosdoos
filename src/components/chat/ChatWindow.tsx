import { useState, useRef, useEffect } from "react";
import { Message, ChatPartner } from "@/types/chat";
import { MessageBubble } from "./MessageBubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatWindowProps {
  partner: ChatPartner;
  messages: Message[];
  onSendMessage: (text: string) => void;
}

export const ChatWindow = ({
  partner,
  messages,
  onSendMessage,
}: ChatWindowProps) => {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-background">
      {/* Header */}
      <header className="bg-chat-header border-b border-border px-4 py-3 sm:px-6 sm:py-4 shrink-0">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              {partner.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-base sm:text-lg text-foreground truncate">
              {partner.name}
            </h2>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "w-2 h-2 rounded-full",
                  partner.isOnline ? "bg-online" : "bg-muted-foreground"
                )}
              />
              <p className="text-xs sm:text-sm text-muted-foreground">
                {partner.isOnline ? "Online" : "Offline"} • {partner.role}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 space-y-1"
      >
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card px-4 py-3 sm:px-6 sm:py-4 shrink-0">
        <div className="flex gap-2 sm:gap-3 max-w-4xl mx-auto">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 rounded-full bg-background"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="rounded-full h-10 w-10 shrink-0"
            disabled={!inputText.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
