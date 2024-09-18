"use client";

import React from "react";
import { useUserStore } from "@/app/store/user";

export const Profile: React.FC = () => {
  const user = useUserStore((user) => user.user);

  return (
    <button className="w-full flex gap-2 items-center rounded-full p-3 hover:bg-zinc-900">
      <div className="flex w-11 h-11 rounded-full bg-orange-800"></div>
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-textWhite text-sm leading-5">
          {user.name}
        </h1>
        <span className="text-textGray text-sm leading-5">{user.tag}</span>
      </div>
    </button>
  );
};
