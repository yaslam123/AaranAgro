import HeaderThree from "@/layouts/headers/HeaderThree";
import React from "react";
import Breadcrumnd from "../common/Breadcrumnd";
import FooterTwo from "@/layouts/footers/FooterTwo";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FaqHomeThree from "../homes/home-3/FaqHomeThree";
import CounterHomeThree from "../homes/home-3/CounterHomeThree";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FooterOne from "@/layouts/footers/FooterOne";

export default function Faq() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Faq" subtitle="Faq" />
      <FaqHomeThree />
      <CounterHomeThree style_2={true} />
      <SubscribeHomeThree />
      <FooterOne />
    </>
  );
}
