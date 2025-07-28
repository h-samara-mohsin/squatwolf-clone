import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer"; 

export const metadata = {
  title: "Squatwolf Store",
  description: "Gym Apparel by Squatwolf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
