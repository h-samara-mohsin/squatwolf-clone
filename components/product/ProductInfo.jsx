"use client";

import { useState } from "react";
import SizeSelector from "./SizeSelector";
import ColorSwatches from "./ColorSwatches";
import AddToCartButton from "../AddToCartButton";
import ShopTheLook from "./ShopTheLook";

export default function ProductInfo({ product }) {
  const metafields = {};
  product.metafields?.forEach((field) => {
    metafields[`${field.namespace}:${field.key}`] = field.value;
  });

  const modelInfo = metafields["info:model_and_size_info"];
  const swatches = metafields["pdp:color_swatches"];
  const promo = metafields["pdp:promotional"];
  const color = metafields["colors:selected"];
  const rating = metafields["reviews:rating"];
  const ratingCount = metafields["reviews:rating_count"];
  const shopTheLookJSON = metafields["custom:shop_the_look_venn_apps"];

  const price = parseFloat(product.priceRange?.minVariantPrice?.amount || "0");
  const points = Math.floor(price * 0.04); // 4% PackVIP point example
  const variants = product.variants.edges;

  const [selectedVariantId, setSelectedVariantId] = useState(
    variants[0]?.node.id
  );

  let shopTheLook = [];
  try {
    shopTheLook = JSON.parse(shopTheLookJSON || "[]");
  } catch (e) {
    console.error("Invalid shop the look JSON");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{product.title}</h1>
      <p className="text-xs uppercase tracking-widest text-gray-500">
        {product.productType || "NEW DROP"}
      </p>

      {/* Rating */}
      {rating && (
        <p className="flex items-center text-sm text-gray-600 gap-1">
          {parseFloat(rating).toFixed(1)}{" "}
          <span className="text-yellow-500">★</span>{" "}
          {ratingCount && <span className="text-xs">({ratingCount})</span>}
        </p>
      )}

      <p className="text-lg font-bold">Rs {price.toLocaleString()}</p>
      <p className="text-sm text-gray-700">🏆 EARN {points} PACKVIP POINTS</p>

      {/* Color Label */}
      {color && (
        <p className="text-sm font-medium mt-4">{color}</p>
      )}

      {/* Color Swatches */}
      <ColorSwatches swatches={swatches} />

      {/* Size Selection */}
      <SizeSelector
        variants={variants}
        selectedVariantId={selectedVariantId}
        setSelectedVariantId={setSelectedVariantId}
      />

      {/* Model Info */}
      {modelInfo && (
        <p className="text-sm text-gray-600">{modelInfo}</p>
      )}

      {/* Add to Cart */}
      <AddToCartButton product={product} variantId={selectedVariantId} />

      {/* Shop the Look */}
      <ShopTheLook items={shopTheLook} />
    </div>
  );
}
