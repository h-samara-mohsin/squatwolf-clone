import { shopifyFetch } from "@/lib/shopify";
import { COLLECTION_QUERY } from "@/lib/queries";
import Link from "next/link";

export const metadata = {
  title: "Men's Gym T-Shirts - Squatwolf",
  description: "Explore gym t-shirts for men",
};

export default async function CollectionPage() {
  const data = await shopifyFetch(COLLECTION_QUERY);
  const products = data.collection.products.edges;

  return (
    <main className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(({ node }) => (
        <Link key={node.id} href={`/products/${node.handle}`} className="border p-2">
          <img src={node.images.edges[0]?.node.url} alt={node.title} />
          <h2>{node.title}</h2>
          <p>${node.priceRange.minVariantPrice.amount}</p>
        </Link>
      ))}
    </main>
  );
}
