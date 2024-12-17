"use client";

import React from "react";
import { links } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 p-4 w-full border-t-2 bg-white">
      <div className="container flex justify-center items-center gap-16 mx-auto ">
        {links.map(({ href, icon }) => {
          return (
            <Link
              key={href}
              className={`${
                pathname === href ? "text-white bg-blue-900 rounded-full " : ""
              } text-2xl p-2`}
              href={href}
            >
              {icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
