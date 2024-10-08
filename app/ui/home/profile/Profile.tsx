"use client";

import React, { useEffect } from "react";
import { useUserStore } from "@/app/store/user";
import { Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import Image from "next/image";
import { setCookie } from "@/app/lib/coockies";
import { getUser } from "@/app/api/users";

export const Profile: React.FC = () => {
  const user = useUserStore((user) => user.user);
  const setUser = useUserStore((user) => user.setUser);

  useEffect(() => {
    const userId = Number(localStorage.getItem("userId"));

    getUser(userId)
      .then((res) => {
        setUser(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    setCookie("access", "", "");
    location.reload();
  }

  return (
    <Menu>
      <MenuButton
        as={"div"}
        className="rounded-full cursor-pointer md:p-3 hover:bg-zinc-900"
      >
        <div className="w-full flex gap-2 items-center justify-center md:justify-normal">
          <Image
            src="/assets/icons/user.svg"
            priority
            width={44}
            height={44}
            alt="user"
          />
          <div className="flex flex-col items-start hidden md:block">
            <h1 className="font-bold text-textWhite text-sm leading-5">
              {user.name}
            </h1>
            <span className="text-textGray text-sm leading-5">{user.tag}</span>
          </div>
        </div>
        <Portal>
          <MenuList rounded="full" border="none" bg="#18181b">
            <MenuItem
              padding=".5rem 1rem"
              justifyContent="space-between"
              rounded="full"
              bg="#18181b"
              onClick={handleLogout}
            >
              Logout
              <Image
                src={"assets/icons/logout.svg"}
                width={22}
                height={22}
                alt="logout"
              />
            </MenuItem>
          </MenuList>
        </Portal>
      </MenuButton>
    </Menu>
  );
};
