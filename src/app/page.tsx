import Blogs from "@/components/Blogs";
import CardGrid from "@/components/CardGrid";
import CarouselPart from "@/components/Carosel";
import Featured from "@/components/Featured";
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
      <Featured/>
      <HomeTiles />
      <CardGrid />
      <Trending />
      <UpcomingEvents />
      <Blogs />
      <VideoDairies />
    </>
  );
}
