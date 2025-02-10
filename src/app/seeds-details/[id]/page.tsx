"use client";

import { useParams } from "next/navigation";
import seeds_data from "@/data/seeds_data";
import ProductDetails from "@/components/seeds-details";

export default function ProductDetailsPage() {
  const { id } = useParams(); // Get product ID from URL
  const product = seeds_data.find((item) => item.id.toString() === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductDetails product={product} />;
}
