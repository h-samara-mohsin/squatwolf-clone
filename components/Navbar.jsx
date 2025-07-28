"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cartItems, toggleCart } = useContext(CartContext);

  // Calculate total quantity of all items in the cart
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <Link href="/" className="font-bold text-xl">Squatwolf</Link>
      {/* <Link href="/" className="flex items-center gap-2">
        <img
          src="https://squatwolf.com/cdn/shop/files/Squatwolf-Logo_White.svg"
          alt="Squatwolf Logo"
          className="h-6 w-auto"
        />
      </Link> */}
      <div className="flex items-center gap-4">
        <a href="/collections/gym-tshirts-men">Gym T-Shirts</a>
        <button onClick={toggleCart} aria-label="View cart" className="relative">
          🛒
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {totalQuantity}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
