"use client";

import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useContext } from "react";
import { FaSearch, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "@/components/Logo";

export default function Navbar() {
  const { toggleCart } = useContext(CartContext);

  return (
    <header className="border-b border-gray-200 text-sm font-medium text-black">
      {/* 🔝 Top Bar */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-50 text-xs tracking-wide">
        {/* Left side */}
        <div className="space-x-6">
          <span className="hover:underline cursor-pointer">
            CORE COLLECTION NEW DROP
          </span>
          <span className="hover:underline cursor-pointer">LIVE NOW &gt;</span>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1 cursor-pointer hover:underline">
            ENGLISH <IoIosArrowDown />
          </span>
          <span className="flex items-center gap-1 cursor-pointer hover:underline">
            PAKISTAN <IoIosArrowDown />
          </span>
        </div>
      </div>

      {/* 🔻 Main Navbar */}
      <nav className="w-full border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left - Logo */}
          <Link href="/">
            <Logo className="h-5 w-8 cursor-pointer text-black" />
          </Link>

          {/* Center - Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#">MEN</Link>
            <Link href="#">WOMEN</Link>
            <Link href="#">ACCESSORIES</Link>
            <Link href="#">SALE</Link>
            <Link href="#">EXPLORE</Link>
            <FaSearch className="cursor-pointer" />
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#">HELP</Link>
            <Link href="#">PACKVIP</Link>
            <Link href="#">LOG IN / SIGN UP</Link>
            <FaRegHeart className="cursor-pointer" />
            <FaShoppingBag
              className="cursor-pointer text-xl"
              onClick={toggleCart}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
