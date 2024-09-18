"use client";

import { useEffect } from "react";
import { navigate } from "@/app/lib/clientRedirect";
import { getCookie } from "@/app/lib/coockies";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (getCookie("access")) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-blue-400">
      <div className="p-4 rounded-xl bg-white min-w-96">{children}</div>
    </div>
  );
}
