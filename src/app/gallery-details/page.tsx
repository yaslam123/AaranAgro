import GalleryDetails from "@/components/gallery-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Aaran - Aaran Agritrade LTD",
  description: "Aaran - Aaran Agritrade LTD",
};

export default function index() {
  return (
    <Wrapper>
      <GalleryDetails />
    </Wrapper>
  );
}
