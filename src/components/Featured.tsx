"use client"
import { demoStore } from "@/store/store";
import { Button } from "./ui/button";

/* eslint-disable @next/next/no-img-element */
export default function Featured() {
  const { featured } = demoStore();
  return (
    <>
      <div className="md:px-14 px-3 lg:py-8 gradient">
        <div className="text-white text-lg md:text-5xl font-bold  self-start py-3 md:py-4">
          Featured
        </div>
        <div className="lg:overflow-hidden overflow-x-scroll scroll-none">
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10 mt-5 md:mt-10 w-[300%] md:[190%] lg:w-[100%] scroll-none">
            {featured.map((feature) => (
              <div
                className="rounded-t-3xl xl:rounded-none mb-5 "
                key={feature.id}
              >
                <div className="bg-white rounded-t-xl xl:rounded-t-xl">
                  <div className="flex flex-col">
                    <div className=" relative h-[180px] md:h-[230px]">
                      <img
                        src={feature.image}
                        alt="abcd"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl xl:rounded-t-xl"
                      />
                    </div>
                    <div className="p-1 md:p-3">
                      <h5 className="text-base md:text-xl font-bold h-10 md:h-10 text-customBlue pt-3 px-2 truncate capitalize">
                       {feature.title}
                      </h5>
                      <div className="text-[10px] md:text-xs py-1 md:py-2 text-[#212121] font-normal px-2">
                        <span className="pr-1">POSTED ON</span>
                        <span className="pl-1 ">{feature.date}</span>
                      </div>
                      <div className="text-customGreen underline font-semibold md:text-base text-[10px] md:my-3 inline-block px-2 uppercase">
                        {feature.type}
                      </div>
                      <div className="flex justify-center xl:mb-0 px-2">
                        <Button variant={"commonBtn"} className="text-white">
                          {" "}
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
