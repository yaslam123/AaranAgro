import React from "react";
import { Metadata } from "next";
import HomeTwo from "@/components/homes/home-2";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Aaran - Aaran Agritrade LTD",
  description: "Aaran - Aaran Agritrade LTD",
};

export default function index() {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
}
