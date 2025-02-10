import HeaderThree from "@/layouts/headers/HeaderThree";
import React from "react";
import Breadcrumnd from "../common/Breadcrumnd";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
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
