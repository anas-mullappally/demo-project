"use client";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";

const Page = () => {
  return (
    <>
      <div className="min-h-[72vh] md:min-h-[65vh] lg:min-h-[50vh]">
        <div className="bg-white text-black">
          <div className="md:mb-8 relative w-full h-40 md:h-56 lg:h-96">
            <Image
              src="/blog-bg.jpg"
              alt="blogs"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="md:px-14 px-3 md:py-4">
            <div className="flex gap-2 items-center py-3 md:py-0">
              <a href="/">
                <div className="text-[#181B1E] text-[10px] md:text-base">
                  Home{" "}
                </div>
              </a>
              <div className="text-[10px] md:text-base md:px-0"> &gt; </div>
              <div className="font-bold text-[10px] md:text-base">Blogs</div>
            </div>
          </div>
          <div className="lg:px-14 md:px-14 lg:py-4 px-3">
            <div className="md:flex block">
              <div className="text-black md:text-3xl lg:text-5xl text-base font-bold md:py-4 lg:py-4 mb-4  ">
                Blogs
              </div>
              <div className="flex flex-col justify-end flex-grow">
                <div className="flex gap-8 lg:justify-end">
                  <div>
                    <div className="hidden w-full lg:flex lg:justify-end font-bold">
                      Filter
                    </div>
                  </div>
                </div>

                <div className="flex md:justify-end justify-between">
                  <div className="flex gap-4 mb-2 md:mb-4 lg:mb-2 justify-start align-middle ">
                    <>
                      <Select defaultValue="latest">
                        <SelectTrigger className="w-[180px] rounded-full">
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel className="text-gray-400">
                              Sort by
                            </SelectLabel>
                            <SelectItem value="latest">Latest</SelectItem>
                            <SelectItem value="reactions">Reactions</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <div className="relative w-[200px] outline-none">
                        <Input
                          type="email"
                          placeholder="Email"
                          className="pl-10 rounded-full outline-none"
                          //   style={{outline:"none"}}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none outline-none">
                          <FaSearch className="text-gray-500" />
                        </div>
                      </div>
                    </>
                  </div>

                  <div className="flex justify-end ">
                    <div className=" md:col-span-2 col-span-4  md:text-right ml-1 md:ml-2  md:text-dark">
                      <Select defaultValue="latest">
                        <SelectTrigger className="w-[180px] rounded-full">
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel className="text-gray-400">
                              Sort by
                            </SelectLabel>
                            <SelectItem value="latest">Latest</SelectItem>
                            <SelectItem value="reactions">Reactions</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="cursor-pointer justify-end w-max">
                    <div className="hidden w-full lg:flex justify-end text-gray-300 text-xs mt-2">
                      Clear Filter
                    </div>
                  </div>
                </div>
              </div>

            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-5 mt-2 lg:pt-6">
                <div className="h-24 bg-violet-500"></div>
                <div className="h-24 bg-violet-500"></div>
                <div className="h-24 bg-violet-500"></div>
                <div className="h-24 bg-violet-500"></div>
                <div className="h-24 bg-violet-500"></div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
