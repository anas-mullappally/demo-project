
import Blogs from "@/components/Home/Blogs";
import CardGrid from "@/components/Home/CardGrid";
import CarouselPart from "@/components/Home/Carosel";
import Featured from "@/components/Home/Featured";
import HomeTiles from "@/components/Home/HomeTiles";
import StickySlide from "@/components/Home/StickySide";
import Trending from "@/components/Home/Trending";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import VideoDairies from "@/components/Home/VideoDairies";


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
