"use client";
import carLogo from "@/public/car-logo.svg";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

interface searchBar {
  placeholder: string;
  hasIcon: boolean;
}

export default function SearchBar({ placeholder, hasIcon }: searchBar) {
  function handleSearch() {}
  return (
    <form className="mb-4 flex justify-center">
      <div className="flex items-center border-b border-gray-400 w-64 px-4 py-2 rounded-2xl">
        {hasIcon && <Image src={carLogo} alt="carLogo" className="mr-2" />}
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none w-full bg-transparent"
        />
        <button type="button" onClick={handleSearch} className="cursor-pointer">
          <IoSearch className="text-gray-500 text-xl mr-2" />
        </button>
      </div>
    </form>
  );
}
