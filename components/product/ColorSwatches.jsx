"use client";
import { useState } from "react";

export default function ColorSwatches({ swatches }) {
  if (!swatches) return null;

  let parsed = [];

  try {
    parsed = JSON.parse(swatches); // Expected: [{ title, image }]
  } catch (e) {
    console.error("Invalid swatch JSON");
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="mt-4">
      <p className="text-sm font-semibold mb-2">{parsed[selectedIndex]?.title}</p>
      <div className="flex gap-2">
        {parsed.map((swatch, idx) => (
          <img
            key={idx}
            src={swatch.image}
            alt={swatch.title}
            className={`h-16 w-12 border rounded cursor-pointer ${
              idx === selectedIndex ? "border-black" : "border-gray-300"
            }`}
            onClick={() => setSelectedIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
