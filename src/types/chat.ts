export interface Message {
  id: string;
  sender: "OEM" | "Customer";
  text: string;
  timestamp: string;
}

export interface ChatPartner {
  name: string;
  role: string;
  isOnline: boolean;
  avatar?: string;
}
