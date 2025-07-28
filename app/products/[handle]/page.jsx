import { shopifyFetch } from "@/lib/shopify";
import { PRODUCT_QUERY } from "@/lib/queries";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import AddToCartButton from "@/components/AddToCartButton";

export async function generateMetadata({ params }) {
  return {
    title: `${params.handle} | Squatwolf`,
    description: "Buy original gym apparel",
  };
}

export default async function ProductPage({ params }) {
  const data = await shopifyFetch(PRODUCT_QUERY, { handle: params.handle });
  const product = data.product;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      <img
        src={product.images.edges[0]?.node.url}
        alt={product.title}
        className="w-full"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl">${product.priceRange.minVariantPrice.amount}</p>
        <p>{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

function AddToCart({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <button
      className="mt-4 px-4 py-2 bg-black text-white"
      onClick={() =>
        addToCart({
          id: product.id,
          title: product.title,
          price: parseFloat(product.priceRange.minVariantPrice.amount),
        })
      }
    >
      Add to Cart
    </button>
  );
}
