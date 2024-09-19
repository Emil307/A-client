"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
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
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 px-2 md:pr-4 w-fit md:w-72 h-screen border-r-sm border-borderColor">
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
      </div>
      <Profile />
    </div>
  );
};
