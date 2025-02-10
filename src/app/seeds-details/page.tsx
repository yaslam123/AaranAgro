import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Aaran - Aaran Agritrade LTD",
  description: "Aaran - Aaran Agritrade LTD",
};

export default function SeedsDetailsIndex() {
  return (
    <Wrapper>
      <h1>Seeds Details Overview</h1>
      <p>Select a seed to view more details.</p>
    </Wrapper>
  );
}
