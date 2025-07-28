

import { shopifyFetch } from "@/lib/shopify";
import { PRODUCT_QUERY } from "@/lib/queries";
import ProductPageLayout from "@/components/product/ProductPageLayout"; // Renamed for clarity

export default async function ProductPage({ params }) {
  const response = await shopifyFetch(PRODUCT_QUERY, {
    handle: params.handle, // ✅ dynamic handle based on URL
  });

  const product = response?.data?.product;

  console.log("✅ Product Data:", product);
  console.log("✅ Product Data (string):", JSON.stringify(product, null, 2));

  if (!product) return <div className="p-6">❌ Product not found.</div>;

  return <ProductPageLayout product={product} />;
}

