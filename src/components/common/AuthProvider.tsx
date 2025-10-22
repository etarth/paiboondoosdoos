"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Role = "guest" | "customer" | "oem";

type AuthContextType = {
  role: Role;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("guest");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("role") : null;
    if (saved === "customer" || saved === "oem") setRole(saved);
  }, []);

  const login = (username: string, password: string) => {
    if (
      (username === "customer" && password === "test1234") ||
      (username === "oem" && password === "test1234")
    ) {
      const newRole = username as Role;
      setRole(newRole);
      window.localStorage.setItem("role", newRole);
      // Persist role to cookie so middleware can read it
      document.cookie = `role=${newRole}; path=/; max-age=${60 * 60 * 24 * 7}`;
      return true;
    }
    return false;
  };

  const logout = () => {
    setRole("guest");
    window.localStorage.removeItem("role");
    // Clear role cookie
    document.cookie = `role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}