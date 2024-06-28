"use client";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";
import { FaHandHoldingMedical, FaRegCommentDots } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import ViewAll from "./common/ViewAll";
import { demoStore } from "@/store/store";

export default function VideoDairies() {
  const { videos } = demoStore();

  return (
    <>
      <div className="md:px-14 px-3 lg:py-8 ">
        <div className="bg-white text-black text-lg md:text-5xl font-bold  self-start py-3 md:py-4">
          Video Dairies
        </div>
        <div className="lg:overflow-hidden overflow-x-scroll scroll-none ">
          <div className="grid grid-cols-3 md:grid-cols-3 md:gap-4 rounded-xl gap-3 w-[250%] md:[160%] lg:w-[100%] ">
            {videos.map((video) => (
              <div className="h-full md:mb-8" key={video.id}>
                <div className="bg-[#e5f5f6] w-full rounded-xl flex flex-col">
                  <div className="w-max">
                    <div className="flex flex-row py-3 px-4 items-center">
                      <div>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="text-black bg-cover font-bold px-4 text-xs md:text-base capitalize">
                          {video.user.name}
                        </div>
                        <div className="text-[10px] md:text-xs ml-2 text-[#212121] font-normal md:pl-0">
                          <span className="pr-1"></span>
                          <span className="pl-1">{video.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:mx-0 bg-cover overflow-hidden youtube-video aspect-video w-full bg-black">
                    <div style={{ width: "100%", height: "100%" }}>
                      <div
                        style={{
                          position: "relative",
                          paddingBottom: "56.25%",
                          height: 0,
                          overflow: "hidden",
                          maxWidth: "100%",
                        }}
                      >
                        <iframe
                          title="YouTube video player"
                          src={video.link}
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  <div className="py-4 px-4 truncate text-center">
                    <span className="text-base md:text-xl font-bold text-black h-10 text-center capitalize cursor-pointer truncate">
                      {video.title}
                    </span>

                    <div className="flex justify-center">
                      <div className="flex w-45 h-8 items-center">
                        <div className="flex gap-2">
                          <div className="flex gap-2">
                            <FaHandHoldingMedical size={25} />
                            <span>{video.likes.length}</span>
                          </div>
                          <div className="flex gap-2 items-center justify-center">
                            <FaRegCommentDots size={25} />
                            <span>{video.comments.length}</span>
                          </div>
                          <div>
                            <CiShare2 size={25} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ViewAll />
      </div>
    </>
  );
}
