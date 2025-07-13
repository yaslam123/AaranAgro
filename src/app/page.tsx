import React from "react";
import { Metadata } from "next";

import Wrapper from "@/layouts/Wrapper";
import HomeThree from "@/components/homes/home-3";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aaranagritrade.com"),
  keywords: [
    "Aaran Agritrade Ltd",
    "aaran agritrade ltd",
    "aaran agro",
    "aran agritrade",
    "aaran bakaro",
    "aaran ",
  ],
  title: "Aaran - Aaran Agritrade LTD",
  description: "Aaran - Aaran Agritrade LTD",
};

export default function index() {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
}
