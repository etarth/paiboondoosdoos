"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/common/AuthProvider";
import HomeContent from "@/components/home/HomeContent";

export default function Home() {
  const router = useRouter();
  const { role } = useAuth();

  if (role === "oem") {
    router.push("/oem/dashboard");
    return null;
  } else {
    return <HomeContent />;
  }
}
