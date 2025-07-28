"use client";
import { useState } from "react";

export default function SizeSelector({ variants, selectedVariantId, setSelectedVariantId }) {
  return (
    <div className="mt-4">
      <p className="text-sm font-semibold mb-2">Size</p>
      <div className="flex gap-2">
        {variants.map((v) => {
          const variant = v.node;
          const isSelected = selectedVariantId === variant.id;

          return (
            <button
              key={variant.id}
              onClick={() => setSelectedVariantId(variant.id)}
              className={`px-4 py-2 border text-sm ${
                isSelected ? "bg-black text-white" : "bg-white text-black"
              } ${!variant.availableForSale && "opacity-50 cursor-not-allowed"}`}
              disabled={!variant.availableForSale}
            >
              {variant.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
