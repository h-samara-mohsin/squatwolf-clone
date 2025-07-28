

"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import Logo from "../Logo";

const ProductPageLayout = ({ product }) => {
  const { title, priceRange, images, variants } = product;
  const { addToCart } = useContext(CartContext);

  const swatches = images?.edges.slice(0, 4) || [];
  const sizes = variants?.edges.map((v) => v.node.selectedOptions[0]?.value) || [];

  const [selectedImage, setSelectedImage] = useState(images.edges[0]?.node.url || "");
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedVariant, setSelectedVariant] = useState(variants?.edges[0]?.node);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    const variant = variants.edges.find((v) => v.node.selectedOptions[0].value === size);
    if (variant) {
      setSelectedVariant(variant.node);
      setSelectedImage(variant.node.image?.url || selectedImage);
    }
  };

const handleAddToCart = () => {
  if (!selectedVariant) return;

  const variantPrice =
    selectedVariant?.price?.amount ||
    selectedVariant?.priceV2?.amount ||
    priceRange?.minVariantPrice?.amount ||
    "0";

  addToCart({
    id: selectedVariant.id,
    title,
    price: parseFloat(variantPrice),
    image: selectedImage,
    quantity: 1,
  });
};

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Image */}
      <div className="w-full">
        <Image
          src={selectedImage}
          alt={title}
          width={700}
          height={700}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Right: Info */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold uppercase">{title}</h2>
        <p className="text-sm text-gray-500">NEW DROP</p>
        <p className="text-xl font-semibold text-black">Rs {priceRange.minVariantPrice.amount}</p>

        <div className="flex items-center gap-2">
          <Logo />
          <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
            EARN 615 PACKVIP POINTS
          </p>
        </div>

        {/* Color Swatches */}
        <div>
          <h4 className="text-sm mb-2">Black</h4>
          <div className="flex gap-2">
            {swatches.map(({ node }, idx) => (
              <Image
                key={idx}
                src={node.url}
                alt="swatch"
                width={60}
                height={60}
                className={`border rounded-md cursor-pointer ${
                  selectedImage === node.url ? "ring-2 ring-black" : ""
                }`}
                onClick={() => setSelectedImage(node.url)}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h4 className="text-sm mb-2 mt-4">Size</h4>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`border px-4 py-2 transition-all duration-200 ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Sebastian is 6'2" and wears Large
          </p>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-700 text-xl mt-2">
          <FaStar className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-3 text-sm tracking-wider mt-4"
        >
          ADD TO CART
        </button>

        {/* Shop The Look (Inside Right Section) */}
        <div className="bg-gray-100 p-4 mt-6 rounded">
          <h3 className="text-sm font-semibold mb-4 tracking-wide">SHOP THE LOOK</h3>
          <div className="flex gap-4">
            <Image
              src="https://cdn.shopify.com/s/files/1/0618/9462/3460/files/look1.jpg"
              alt="look1"
              width={100}
              height={120}
              className="rounded border"
            />
            <Image
              src="https://cdn.shopify.com/s/files/1/0618/9462/3460/files/look2.jpg"
              alt="look2"
              width={100}
              height={120}
              className="rounded border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageLayout;
