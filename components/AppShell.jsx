// components/AppShell.jsx
"use client";

import { CartProvider } from "@/context/CartContext";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";

export default function AppShell({ children }) {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      {children}
    </CartProvider>
  );
}
