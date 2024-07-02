/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function CarouselPart() {
  const autoplayRef = useRef(Autoplay({ delay: 2000 }));

  const arr = [
    {
      url: "https://www.manipalcommunityconnect.in/_next/image?url=https%3A%2F%2Fmhcp-prod.s3.us-west-2.amazonaws.com%2Fbanners%2F6523a0018c6838c042806d41%2Fimage.jpg&w=1920&q=90",
      title: "1",
    },
    {
      url: "https://www.manipalcommunityconnect.in/_next/image?url=https%3A%2F%2Fmhcp-prod.s3.us-west-2.amazonaws.com%2Fbanners%2F658abe104f951f2a61db66bf%2Fimage.jpg&w=1920&q=90",
      title: "2",
    },
  ];

  return (
    <div className="relative w-full h-fit overflow-hidden hidden md:block ">
      <Carousel className="w-full max-w-screen" plugins={[autoplayRef.current]}>
        <CarouselContent>
          {arr.map((item, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden  w-full">
                <a href="/">
                  <img
                    src={item.url}
                    alt={`Image ${index}`}
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
          <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
