import HeaderThree from "@/layouts/headers/HeaderThree";
import React from "react";
import Breadcrumnd from "../common/Breadcrumnd";
import ServiceDetailsArea from "./ServiceDetailsArea";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FooterOne from "@/layouts/footers/FooterOne";

export default function AgrotechSolutions() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Agro Tech Solutions" subtitle="Service Details" />
      <ServiceDetailsArea />
      <SubscribeHomeThree />
      <FooterOne />
    </>
  );
}
