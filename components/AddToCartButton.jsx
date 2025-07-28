

import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleAdd = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select both size and color.");
      return;
    }

    const productData = {
      id: product.id,
      title: `${product.title} - ${selectedColor} / ${selectedSize}`,
      price: parseFloat(product.priceRange?.minVariantPrice?.amount || "0"),
      image: product.images?.edges[0]?.node?.url || "",
      quantity: 1,
      color: selectedColor,
      size: selectedSize,
    };

    addToCart(productData);
  };

  return (
    <div>
      <div className="flex gap-2 mb-2">
        {product.options
          .find((opt) => opt.name.toLowerCase() === "color")
          ?.values.map((color) => (
            <button
              key={color}
              className={`border px-2 py-1 ${
                selectedColor === color ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
      </div>

      <div className="flex gap-2 mb-4">
        {product.options
          .find((opt) => opt.name.toLowerCase() === "size")
          ?.values.map((size) => (
            <button
              key={size}
              className={`border px-3 py-1 ${
                selectedSize === size ? "bg-black text-white" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
      </div>

      <button
        onClick={handleAdd}
        className="mt-2 px-4 py-2 bg-black text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}

