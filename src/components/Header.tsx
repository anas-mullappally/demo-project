import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <>
      <div className="bg-white sticky top-0 z-40 w-full border-solid ">
        <div className="h-6 w-full main-bg"></div>

        <div className="mx-auto px-4 md:px-14 border-b-2 border-gray-100 py-2.5">
          <div className="flex py-2.5 md:py-1 md:justify-start md:space-x-10">
            <div className="col-span-4 w-24 md:w-52 md:col-span-4 flex items-center">
              <a href="/">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  width="150"
                  height="42"
                  className="inline-block"
                />
              </a>
            </div>
            <div className="bg-primary relative top-3 md:top-4 ml-3 py-0 md:py-2 rounded-lg flex items-center justify-center h-[26px] md:h-[47px] shadow-md px-2 md:px-3 cursor-pointer">
              <a href="/" className="flex items-center">
                <span className="absolute top-0 -translate-y-1/2 -left-2 text-white text-[8px] md:text-sm font-medium bg-[#00b7ac] rounded p-[2px] md:p-1">
                  New
                </span>
                <span className="hidden md:block text-white md:text-base lg:text-lg font-semibold text-center">
                  Neighbourhood Card
                </span>
                <span className="md:hidden block text-white text-[9px] font-semibold text-center">
                  NHCard
                </span>
              </a>
            </div>
            <div className="flex gap-2 flex-grow justify-end items-center group">
              <label className="hidden lg:block">
                <div className="text-[10px] h-7 md:h-10 md:text-sm flex focus-within:border focus-within:border-dark rounded-3xl">
                  <div className="h-full px-[1px] pl-2 md:pl-2 flex justify-center items-center">
                    <img
                      width="13"
                      alt="Icon"
                      className="text-dark h-full w-5 md:w-7 md:h-4 cursor-pointer"
                      height="13"
                      src="/Vector.svg"
                    />
                  </div>
                  <input
                    placeholder="Search"
                    className="w-0 focus:px-1 focus:md:w-64 focus:w-20 transition-width transition-slowest ease transition-all placeholder:text-dark text-xs md:text-base bg-transparent border-none outline-none focus:ring-0"
                  />
                </div>
              </label>
              <label className="block lg:hidden">
                <img
                  width="16"
                  alt="Icon"
                  className="h-3 w-3 md:h-5 md:w-5 md:mx-2"
                  height="16"
                  src="/Vector.svg"
                />
              </label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gradient h-8 md:h-10 w-20 md:w-40 text-xs md:text-base md:px-4 px-2 py-1 md:py-2">
                    Create A Post <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full">
                  <div className="flex  justify-between space-x-2">
                    <div className="lg:w-2/4 md:w-3/4 relative hidden md:block h-full mr-2">
                      <img
                        className="w-full h-full relative"
                        src="https://www.manipalcommunityconnect.in/_next/image?url=%2Fimages%2FcreatePost.png&w=1200&q=75"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <div className="flex  flex-col items-start">
                        <div className="font-semibold text-2xl text-primary">
                          Create an account now!
                        </div>
                        <div className="w-[90vw] md:w-full py-2 font-medium opacity-50 text-[#181B1E] text-base">
                          To continue using and get full access to this site,
                          you need to create an account!
                        </div>
                      </div>
                      <div className="my-3 mx-0 text-base text-gray-500">
                        <div className="list-disc">
                          By signing up you will be able to:
                        </div>
                        <ul>
                          <li className="list-disc ml-4">
                            Register for events{" "}
                          </li>
                          <li className="list-disc ml-4">Create a post </li>
                          <li className="list-disc ml-4">
                            Participate in discussions
                          </li>
                          <li className="list-disc ml-4">React on posts</li>
                          <li className="list-disc ml-4">
                            Apply for Neighbourhood Card
                          </li>
                        </ul>
                        <div className="text-gray-400 text-base">
                          and much more!
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <Button className="gradient h-8 md:h-10 w-20 md:w-40 text-xs md:text-base md:px-4 px-2 py-1 md:py-2" >Sign up Now!</Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                className="text-blue-600 border-blue-600 h-8 md:h-10 w-20 md:w-40 text-xs md:text-base md:px-4 px-2 py-1 md:py-2"
                variant={"outline"}
              >
                Sign Up/Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
