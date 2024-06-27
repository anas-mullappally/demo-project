/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CiShare2 } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";

export default function Trending() {
  const contents = [
    {
      id: 11,
      head: "The Med Talk: A Conversation on Cancer Awareness",
      img:"https://mhcp-prod.s3.us-west-2.amazonaws.com/65dd83cdbbc427a7b66a5994-cancer1-the-med-talk-a-conversation-on-cancer-awareness.webp",
      participant:10,
    },
    {
      id: 12,
      head: "Healthy Brain Corresponds To A Healthy Heart? The He’art’ Of Living Healthy",
      img:"https://mhcp-prod.s3.us-west-2.amazonaws.com/forums/645e6e375f42135f2144f16f/image.webp",
      participant:2,
    },
    {
      id: 13,
      head: "Water Scarcity- Bengaluru",
      img:"https://mhcp-prod.s3.us-west-2.amazonaws.com/65f1846d01eb8f5de3ed472a-doha-water-shortage-debate-water-scarcity--bengaluru.webp",
      participant:5,
    },
    {
      id: 14,
      head: "How Can Modern Women Combat An Ancient Disease- PCOS?",
      img:"https://mhcp-prod.s3.us-west-2.amazonaws.com/forums/645e6c375f42135f2144f058/image.webp",
      participant:23,
    },
  ];
  return (
    <>
      <div className="md:px-14 px-3 lg:py-8">
        <div className="bg-white text-black text-lg md:text-5xl font-bold  self-start py-3 md:py-4">
          Trending Discussions
        </div>
        <div className="xl:overflow-hidden overflow-x-scroll overflow-y-hidden scroll-none">
          <div className="grid grid-cols-2 gap-4 md:gap-0 md:gap-x-6 w-[300%] lg:w-[100%]">
            {contents.map((item) => (
                <div
                  className="flex flex-row items-start py-2 md:py-6 object-center "
                  key={item.id}
                >
                  <div className="md:h-[240px] h-[197px] w-2/5 overflow-hidden">
                    <img
                      className="rounded-lg h-full w-full object-cover"
                      src={item.img}
                      alt={item.head}
                    />
                  </div>
                  <div className="pl-3 pr-4 w-3/5 text-justify">
                    <div className="overflow-hidden truncate mt-1">
                      <span className="text-customBlue text-primary text-ellipsis	 truncate font-bold text-base md:text-xl capitalize">
                        {item.head}
                      </span>
                    </div>
                    <div className="font-normal text-para text-[10px] md:text-xs py-1 md:py-2 flex gap-4 uppercase">
                      <span>Last Updated On</span>
                      <span>FEB 28 2024</span>
                    </div>
                    <div className="overflow-hidden h-20 relative">
                      <div className=" text-sm md:text-sm py-1 md:py-2 text-para opacity-50 font-light ">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Velit, necessitatibus officiis labore iure sit
                          quaerat rem, cumque voluptates non eum placeat rerum?
                          At corporis optio obcaecati incidunt, aspernatur animi
                          provident. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Eaque, autem fugit? Soluta voluptate
                          exercitationem iure aliquam, quis mollitia quibusdam
                          delectus nemo, assumenda magni fuga dolorem illo enim
                          dolorum corporis! Facilis.
                        </p>
                      </div>
                      <div className="from-transparent bg-gradient-to-b to-white w-full h-6 absolute bottom-0"></div>
                    </div>
                    <div className="flex items-center justify-between p-1 md:py-3 w-24 md:w-52 font-semibold">
                      <div className="flex items-center gap-2">
                        <MdOutlinePeopleAlt />
                        <span>{item.participant} Participant</span>
                      </div>
                      <div>
                        <CiShare2 />
                      </div>
                    </div>
                    <Button variant={"commonBtn"} className="text-white">
                      Join Now
                    </Button>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div className="w-100 py-1 flex justify-center">
          <Button variant={"viewAll"} className="border-customBlue">
            View All
          </Button>
        </div>
      </div>
    </>
  );
}
