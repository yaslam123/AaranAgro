"use client";

import { useParams } from "next/navigation";
import sprayers_data from "@/data/sprayers_data";
import ProductDetails from "@/components/sprayers-details";

export default function ProductDetailsPage() {
  const { id } = useParams(); // Get product ID from URL
  const product = sprayers_data.find((item) => item.id.toString() === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductDetails product={product} />;
}
