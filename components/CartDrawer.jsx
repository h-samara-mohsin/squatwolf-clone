"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cartItems,
    open,
    toggleCart,
    removeFromCart,
    updateQuantity,
  } = useContext(CartContext);

//   const total = cartItems.reduce(
//   (acc, item) => acc + ((item.price || 0) * item.quantity),
//   0
// );

const total = cartItems.reduce((sum, item) => {
  console.log("🛒 Cart Item Debug:");
  console.log("Title:", item.title);
  console.log("Price:", item.price);
  console.log("Quantity:", item.quantity);
  return sum + item.price * item.quantity;
}, 0);

console.log("🧮 Final Total:", total);


  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl p-4 z-50 transition-transform duration-300 ease-in-out flex flex-col ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button
          onClick={toggleCart}
          className="text-gray-500 hover:text-red-500 text-lg font-bold"
        >
          ✕
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-grow overflow-y-auto space-y-4 pr-2">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-3 flex justify-between items-center gap-2"
            >
              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity - 1)
                  }
                  className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                >
                  −
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.quantity + 1)
                  }
                  className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 ml-2"
                title="Remove item"
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>

      {/* Total Section */}
      <div className="border-t pt-4 mt-4 font-bold text-lg text-right">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}
