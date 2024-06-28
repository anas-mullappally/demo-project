/* eslint-disable @next/next/no-img-element */
import Blogs from "@/components/Blogs";
import CardGrid from "@/components/CardGrid";
import CarouselPart from "@/components/Carosel";
import HomeTiles from "@/components/HomeTiles";
import Trending from "@/components/Trending";
import UpcomingEvents from "@/components/UpcomingEvents";


export default function Home() {
  return (
    <>
      <CarouselPart />
      <HomeTiles />
      <CardGrid />
      <Trending/>
      <UpcomingEvents/>
      <Blogs/>
    </>
  );
}
