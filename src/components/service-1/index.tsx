import HeaderThree from "@/layouts/headers/HeaderThree";
import React from "react";
import Breadcrumnd from "../common/Breadcrumnd";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import ServiceDetailsArea from "./ServiceDetailsArea";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FooterOne from "@/layouts/footers/FooterOne";

export default function ServiceDetails() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Service Details" subtitle="Service Details" />
      <ServiceDetailsArea />
      <SubscribeHomeThree />
      <FooterOne />
    </>
  );
}
