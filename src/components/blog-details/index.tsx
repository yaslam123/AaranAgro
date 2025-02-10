import React from "react";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Breadcrumnd from "../common/Breadcrumnd";
import SubscribeHomeThree from "../homes/home-3/SubscribeHomeThree";
import FooterTwo from "@/layouts/footers/FooterTwo";
import BlogDetailsArea from "./BlogDetailsArea";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import FooterOne from "@/layouts/footers/FooterOne";

export default function BlogDetails() {
  return (
    <>
      <HeaderTwo />
      <Breadcrumnd title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <SubscribeHomeThree />
      <FooterOne />
    </>
  );
}
