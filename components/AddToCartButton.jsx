"use client"

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    const productData = {
    id: product.id,
    title: product.title,
    price: parseFloat(product.priceRange?.minVariantPrice?.amount || "0"), 
    image: product.images?.edges[0]?.node?.url || "", 
    quantity: 1,
  };

    addToCart(productData);
  };

  return (
    <button
      onClick={handleAdd}
      className="mt-4 px-4 py-2 bg-black text-white"
    >
      Add to Cart
    </button>
  );
}
