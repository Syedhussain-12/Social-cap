"use client";
import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import PricingBox from "../../components/pricingbox";
import Footernew from "@/app/components/Footernew";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <Hero />
      <PricingBox />

      <Footernew/>
    </>
  );
}
