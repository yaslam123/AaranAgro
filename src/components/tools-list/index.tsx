import HeaderThree from "@/layouts/headers/HeaderThree";
import React from "react";
import Breadcrumnd from "../common/Breadcrumnd";
import ProductListArea from "./ProductListArea";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FooterOne from "@/layouts/footers/FooterOne";

export default function ProductList() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Farming Tools List" subtitle="Farming Tools List" />
      <ProductListArea />
      <SubscribeHomeThree />
      <FooterOne />
    </>
  );
}
