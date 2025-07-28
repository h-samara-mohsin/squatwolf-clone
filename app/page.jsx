import { shopifyFetch } from "@/lib/shopify";
import { HOMEPAGE_COLLECTION_QUERY } from "@/lib/queries";
import Link from "next/link";

export const metadata = {
  title: "Squatwolf | Premium Activewear",
  description: "Explore Squatwolf's gym wear for peak performance.",
  keywords: [
    "gym wear",
    "activewear",
    "Squatwolf",
    "men's gym shirts",
    "fitness t-shirts",
    "premium gym clothes",
    "workout apparel",
    "squatwolf t-shirt",
  ],
};

export default async function HomePage() {
  const data = await shopifyFetch(HOMEPAGE_COLLECTION_QUERY);
  const products = data.collection.products.edges;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Squatwolf</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(({ node }) => (
          <Link key={node.id} href={`/products/${node.handle}`}>
            <img src={node.images.edges[0]?.node.url} alt={node.title} />
            <p>{node.title}</p>
            <p>${node.priceRange.minVariantPrice.amount}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
