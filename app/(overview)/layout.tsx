"use client";

import { useEffect } from "react";
import { Navbar } from "@/app/ui/home/navbar";
import { getCookie } from "@/app/lib/coockies";
import { navigate } from "@/app/lib/clientRedirect";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!getCookie("access")) {
      navigate("/auth/signIn");
    }
  }, []);

  return (
    <div className="flex w-full max-w-7xl mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
