"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    id: 1,
    title: "Home",
    icon: (
      <svg
        width={26.25}
        height={26.25}
        viewBox="0 0 24 24"
        fill="#fff"
        aria-hidden="true"
        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
      >
        <g>
          <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
        </g>
      </svg>
    ),
    href: "/home",
  },
  {
    id: 2,
    title: "Explore",
    icon: (
      <svg
        fill="#fff"
        width={26.25}
        height={26.25}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
      >
        <g>
          <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
        </g>
      </svg>
    ),
    href: "/explore",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 px-2">
      <div>
        <>A</>
        <div className="flex flex-col mt-0.5 mb-1">
          {links.map((link) => (
            <div className="flex items-center gap-5 p-3" key={link.id}>
              {link.icon}
              <Link
                href={link.href}
                className={clsx("text-xl", {
                  "font-bold": pathname === link.href,
                })}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3">profile</div>
    </div>
  );
};
