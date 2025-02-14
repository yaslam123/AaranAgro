import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import HeroHomeThree from "./HeroHomeThree";
import ServiceHomeThree from "./ServiceHomeThree";
import AboutHomeThree from "./AboutHomeThree";
import GalleryHomeThree from "./GalleryHomeThree";
import FeatureHomeThree from "./FeatureHomeThree";

import CounterHomeThree from "./CounterHomeThree";
import FaqHomeThree from "./FaqHomeThree";
import BrandHomeOne from "../home/BrandHomeOne";
import TestimonialHomeThree from "./TestimonialHomeThree";
import BlogHomeThree from "./BlogHomeThree";
import SubscribeHomeThree from "./SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import PortfolioHomeOne from "../home/PortfolioHomeOne";
import SubscribeHomeOne from "../home/SubscribeHomeOne";
import CtaHomeOne from "../home/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

export default function HomeThree() {
  return (
    <>
      <HeaderTwo />
      <HeroHomeThree />
      <ServiceHomeThree />
      <AboutHomeThree />
      <GalleryHomeThree />
      <FeatureHomeThree />
      <CounterHomeThree />
      <FaqHomeThree />
      <CtaHomeOne />
      {/* <BrandHomeOne /> */}
      <BlogHomeThree />
      <FooterOne />
    </>
  );
}
