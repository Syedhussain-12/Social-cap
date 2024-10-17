"use client";
import React from "react";
import Navbar from "../../components/navbar";
import Footernew from "@/app/components/Footernew";
import Hero from "@/app/components/hero";
import VideoScroller from "@/app/components/Video";
import Accordion from "@/app/components/Accordian";

export default function Course() {
  return (
    <>
      <Navbar />
      <Hero/>
      <VideoScroller/>
      
      <Footernew/>
    </>
  );
}
