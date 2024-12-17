"use client";

import Image from "next/image";
import React from "react";
import Logo from "/public/Logo.png";
import { CiSearch } from "react-icons/ci";

const MobileNavbar = () => {
  const handleSearch = (e) => {
    if (e.target.value) {
      next.router.push(`/?search=${encodeURIComponent(e.target.value)}`);
    } else {
      next.router.push("/");
    }
  };

  return (
    <div className="md:hidden">
      <div className="container mx-auto px-4 py-5 flex justify-center gap-5">
        <Image
          src={Logo}
          alt="Logo"
          width={70}
          height={40}
          className="object-contain"
        />
        <div className="">
          <form className="search-container flex bg-gray-100 rounded-md pr-2">
            <button className="h-100% flex justify-center items-center w-10 text-xl cursor-pointer">
              <CiSearch />
            </button>
            <input
              className="bg-gray-100 p-2 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Search..."
              onChange={(e) => handleSearch(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
