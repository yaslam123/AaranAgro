import HeaderThree from "@/layouts/headers/HeaderThree";
import React from "react";
import Breadcrumnd from "../common/Breadcrumnd";
import AboutHomeOne from "../homes/home/AboutHomeOne";
import ServiceHomeOne from "../homes/home/ServiceHomeOne";
import TestimoniaHomeOne from "../homes/home/TestimoniaHomeOne";
import CtaHomeOne from "../homes/home/CtaHomeOne";
import PortfolioHomeOne from "../homes/home/PortfolioHomeOne";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import BrandHomeOne from "../homes/home/BrandHomeOne";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FooterOne from "@/layouts/footers/FooterOne";
import AboutHomeThree from "../homes/home-3/AboutHomeThree";
import ServiceHomeThree from "../homes/home-3/ServiceHomeThree";
import AboutHomeTwo from "../homes/home-2/AboutHomeTwo";

export default function About() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="About Us" subtitle="About Aaran Agritrade Ltd" />
      <AboutHomeTwo />
      <ServiceHomeOne />
      <ServiceHomeThree />
      <CtaHomeOne />
      <BrandHomeOne style_3={true} />

      <FooterOne />
    </>
  );
}
