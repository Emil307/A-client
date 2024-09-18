"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Button } from "@chakra-ui/react";
import { Profile } from "@/app/ui/home/profile";

const links = [
  {
    id: 1,
    title: "Home",
    icon: (
      <Image src={"assets/icons/home.svg"} width={26} height={26} alt="home" />
    ),
    href: "/home",
  },
  {
    id: 2,
    title: "Explore",
    icon: (
      <Image src={"assets/icons/home.svg"} width={26} height={26} alt="home" />
    ),
    href: "/explore",
  },
  {
    id: 3,
    title: "Explore",
    icon: (
      <Image src={"assets/icons/home.svg"} width={26} height={26} alt="home" />
    ),
    href: "/explore",
  },
  {
    id: 4,
    title: "Explore",
    icon: (
      <Image src={"assets/icons/home.svg"} width={26} height={26} alt="home" />
    ),
    href: "/explore",
  },
  {
    id: 5,
    title: "Explore",
    icon: (
      <Image src={"assets/icons/home.svg"} width={26} height={26} alt="home" />
    ),
    href: "/explore",
  },
  {
    id: 6,
    title: "Explore",
    icon: (
      <Image src={"assets/icons/home.svg"} width={26} height={26} alt="home" />
    ),
    href: "/explore",
  },
  {
    id: 7,
    title: "Explore",
    icon: (
      <Image src={"assets/icons/home.svg"} width={26} height={26} alt="home" />
    ),
    href: "/explore",
  },
  {
    id: 8,
    title: "Explore",
    icon: (
      <Image src={"assets/icons/home.svg"} width={26} height={26} alt="home" />
    ),
    href: "/explore",
  },
  {
    id: 9,
    title: "Explore",
    icon: (
      <Image src={"assets/icons/home.svg"} width={26} height={26} alt="home" />
    ),
    href: "/explore",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-8 px-2 pr-4 w-72 h-screen border-r-sm border-borderColor">
      <div className="flex flex-col gap-1">
        <Link
          href="/home"
          className="flex mt-1 justify-center items-center w-12 h-12 rounded-full hover:bg-zinc-900"
        >
          <Image
            src="/assets/icons/x-logo.svg"
            priority
            width={27}
            height={27}
            alt="X"
          />
        </Link>
        <div className="flex flex-col mt-0.5 mb-1">
          {links.map((link) => (
            <Link
              href={link.href}
              className="flex w-fit items-center p-3 rounded-full hover:bg-zinc-900"
              key={link.id}
            >
              {link.icon}
              <h5
                className={clsx("text-xl mx-5 hidden md:block", {
                  "font-bold": pathname === link.href,
                })}
              >
                {link.title}
              </h5>
            </Link>
          ))}
        </div>
        <Button
          size={"lg"}
          fontSize={"1rem"}
          fontWeight={"bold"}
          rounded={"full"}
          color={"white"}
          colorScheme="blue"
          className="w-12 p-0 md:w-full"
        >
          <div className="hidden md:block">Post</div>
          <Image
            className="min-w-5 min-h-5 block md:hidden"
            src={"assets/icons/add.svg"}
            width={20}
            height={20}
            alt="add post"
          />
        </Button>
      </div>
      <Profile />
    </div>
  );
};
