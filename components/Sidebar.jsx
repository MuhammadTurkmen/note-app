"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "/public/Logo.png";
import { CiSearch } from "react-icons/ci";
import { links } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { searchNote } from "@/utils/actions";

const Sidebar = () => {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  // const [notes, setNotes] = useState([]);
  // const handleSearchNote = searchNote.bind(null, search);

  // const handleSubmit = (e) => {
  //   setSearch(e.target.value);

  //   if (e.target.value) {
  //     next.router.push(`/?search=${encodeURIComponent(e.target.value)}`);
  //   } else {
  //     next.router.push("/");
  //   }
  // };

  return (
    <div className="w-[200px] h-screen fixed shadow-lg shadow-slate-200 hidden md:block lg:w-[250px] md:px-5 py-7">
      <Image
        src={Logo}
        alt="Logo"
        width={80}
        height={50}
        className="object-contain"
      />
      <form
        className="search-container flex bg-gray-100 rounded-md pr-2 mt-10"
        // onSubmit={handleSubmit}
      >
        <button className="h-100% flex justify-center items-center w-10 text-xl cursor-pointer">
          <CiSearch />
        </button>
        <input
          className="bg-gray-100 w-full p-2 outline-none"
          type="text"
          name=""
          id=""
          value={search}
          // onChange={(e) => {
          //   handleSubmit(e);
          // }}
          placeholder="Search..."
        />
      </form>
      {links.map((link) => {
        return (
          <div
            className={`${
              pathname === link.href ? "bg-blue-900 text-white" : ""
            } flex flex-col gap-3 mt-5 rounded-lg hover:bg-blue-900 hover:text-white`}
            key={link.href}
          >
            <Link href={link.href} className="flex items-center gap-3 p-2">
              {" "}
              <span className="text-xl">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
