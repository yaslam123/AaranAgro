import React from "react";

import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import ProductDetailsArea from "./ProductDetailsArea";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FooterOne from "@/layouts/footers/FooterOne";

export default function ProductDetails({ product }: { product: any }) {
  return (
    <>
      <HeaderTwo />
      <ProductDetailsArea product={product} />
      <SubscribeHomeThree />
      <FooterOne />
    </>
  );
}
