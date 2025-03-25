"use client";
import Image from "next/image";
import { NavBar } from "./components/navbar";
import { Button } from "./components/button";
import { Carousel } from "./components/carousel";
import { Timeline } from "./components/timeline";
import { Heading } from "./components/heading";

export default function Home() {
  // TODO: make more flexible to add/remove/change images
  const carouselImages = ["test_img_1.png", "test_img_2.png", "test_img_3.png"];

  return (
    <>
      {/* Hero */}
      <Heading textSize="text-8xl">Welcome to Collegiate Wushu</Heading>

      <div className="py-6">
        <Carousel imgs={carouselImages} />
      </div>

      <div className="py-[12rem]">
        <Timeline />
      </div>
    </>
  );
}
