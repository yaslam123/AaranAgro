import React from "react";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Breadcrumnd from "../common/Breadcrumnd";
import ServiceArea from "./ServiceArea";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FooterOne from "@/layouts/footers/FooterOne";

export default function Service() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Services" subtitle="Services" />
      <ServiceArea />

      <SubscribeHomeThree />
      <FooterOne />
    </>
  );
}
