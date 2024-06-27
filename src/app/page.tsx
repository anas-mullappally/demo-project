/* eslint-disable @next/next/no-img-element */
import CardGrid from "@/components/CardGrid";
import CarouselPart from "@/components/Carosel";
import HomeTiles from "@/components/HomeTiles";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <CarouselPart />
      <HomeTiles />
      <CardGrid/>
      {/* <div className="grid grid-cols-4 gap-3 md:gap-y-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 mt-4 md:mt-10  justify-center md:mx-0 px-5 md:px-10 lg:px-14">
        <div className=" bg-gradient2 flex text-xs  leading-[10px] w-full h-20 md:h-28 md:leading-6 bg-tealGreen rounded-md md:flex justify-center items-center text-white col-span-1 text-[8px] md:text-base px-4 md:py-4 font-normal md:font-bold ">
          Hello
        </div>
        <div className=" bg-gradient2 flex text-xs  leading-[10px] w-full h-20 md:h-28 md:leading-6 bg-tealGreen rounded-md md:flex justify-center items-center text-white col-span-1 text-[8px] md:text-base px-4 md:py-4 font-normal md:font-bold ">
          Hello
        </div>
        <div className=" bg-gradient2 flex text-xs  leading-[10px] w-full h-20 md:h-28 md:leading-6 bg-tealGreen rounded-md md:flex justify-center items-center text-white col-span-1 text-[8px] md:text-base px-4 md:py-4 font-normal md:font-bold ">
          Hello
        </div>
        <div className=" bg-gradient2 flex text-xs  leading-[10px] w-full h-20 md:h-28 md:leading-6 bg-tealGreen rounded-md md:flex justify-center items-center text-white col-span-1 text-[8px] md:text-base px-4 md:py-4 font-normal md:font-bold ">
          Hello
        </div>
        <div className=" bg-gradient2 flex text-xs  leading-[10px] w-full h-20 md:h-28 md:leading-6 bg-tealGreen rounded-md md:flex justify-center items-center text-white col-span-1 text-[8px] md:text-base px-4 md:py-4 font-normal md:font-bold ">
          Hello
        </div>
        <div className=" bg-gradient2 flex text-xs  leading-[10px] w-full h-20 md:h-28 md:leading-6 bg-tealGreen rounded-md md:flex justify-center items-center text-white col-span-1 text-[8px] md:text-base px-4 md:py-4 font-normal md:font-bold ">
          Hello
        </div>
        <div className=" bg-gradient2 flex text-xs  leading-[10px] w-full h-20 md:h-28 md:leading-6 bg-tealGreen rounded-md md:flex justify-center items-center text-white col-span-1 text-[8px] md:text-base px-4 md:py-4 font-normal md:font-bold ">
          Hello
        </div>
        <div className="py-1 leading-[10px] flex bg-white border-[1px] md:border-2 rounded-md border-[#009DA9] flex-col justify-center items-center col-span-1 w-full text-[#009DA9]">
          <div className="mb-2">View All</div>
          <FaRegArrowAltCircleRight size={20} />
        </div>
      </div> */}
    </>
  );
}
