import HeaderThree from "@/layouts/headers/HeaderThree";
import React from "react";
import Breadcrumnd from "../common/Breadcrumnd";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import GalleryArea from "./GalleryArea";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FooterOne from "@/layouts/footers/FooterOne";

export default function Gallery() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Gallery" subtitle="Gallery" />
      <GalleryArea />
      <SubscribeHomeThree />
      <FooterOne />
    </>
  );
}
