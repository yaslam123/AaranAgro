"use client";

import { useParams } from "next/navigation";
import tools_data from "@/data/tools_data";
import ProductDetails from "@/components/tools-details";

export default function ProductDetailsPage() {
  const { id } = useParams(); // Get product ID from URL
  const product = tools_data.find((item) => item.id.toString() === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductDetails product={product} />;
}
