import Image from "next/image";
import { NavBar } from "./components/navbar";
import { Button } from "./components/button";
import { Carousel } from "./components/carousel";

export default function Home() {
  // TODO: make more flexible to add/remove/change images
  const carouselImages = ["test_img_1.png", "test_img_2.png", "test_img_3.png"];

  return (
    <>
      {/* Hero */}
      <div className="font-bold flex w-full items-center justify-center text-8xl text-center py-6 tracking-[-0.065em]">
        Welcome to Collegiate Wushu
      </div>

      <Carousel imgs={carouselImages} />
    </>
  );
}
