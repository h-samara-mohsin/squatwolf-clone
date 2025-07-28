import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer"; 
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata = {
  title: "Squatwolf Store",
  description: "Gym Apparel by Squatwolf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {/* <Navbar /> */}
          <NavbarWrapper />
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
