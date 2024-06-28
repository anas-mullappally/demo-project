/* eslint-disable @next/next/no-img-element */
import Blogs from "@/components/Blogs";
import CardGrid from "@/components/CardGrid";
import CarouselPart from "@/components/Carosel";
import HomeTiles from "@/components/HomeTiles";
import StickySlide from "@/components/StickySide";
import Trending from "@/components/Trending";
import UpcomingEvents from "@/components/UpcomingEvents";
import VideoDairies from "@/components/VideoDairies";

export default function Home() {
  return (
    <>
      <StickySlide/>
      <CarouselPart />
      <HomeTiles />
      <CardGrid />
      <Trending />
      <UpcomingEvents />
      <Blogs />
      <VideoDairies />
    </>
  );
}
