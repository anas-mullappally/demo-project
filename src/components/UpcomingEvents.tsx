"use client";
import { FaHandHoldingMedical, FaRegCommentDots } from "react-icons/fa";
import { Button } from "./ui/button";
import { CiShare2 } from "react-icons/ci";
import ViewAll from "./common/ViewAll";
import { demoStore } from "@/store/store";
/* eslint-disable @next/next/no-img-element */
export default function UpcomingEvents() {
  const { events } = demoStore();
  return (
    <>
      <div className="md:px-14 px-3 lg:py-8">
        <div className="bg-white text-black text-lg md:text-5xl font-bold  self-start py-3 md:py-4">
          Upcoming Events
        </div>
        <div className="lg:overflow-hidden overflow-x-scroll scroll-none">
          {events.map((event) => (
            <div
              className="md:bg-[#009DA9]/[0.06] rounded-lg md:flex mb-6 md:shadow-lg "
              key={event.id}
            >
              <div className="md:w-[20%] text-center h-[220px] md:h-[258px] block">
                <img
                  className=" h-full object-cover object-center bg-slate-200"
                  src="https://www.manipalcommunityconnect.in/_next/image?url=https%3A%2F%2Fmhcp-prod.s3.us-west-2.amazonaws.com%2F667bfce4c646b777c3411509-screenshot-2024-03-21-175211-ageless-elegance-senior-style-takes-center-stage.png&w=3840&q=75"
                  alt=""
                />
              </div>
              <div className="md:ml-10 p-3 md:pb-0 md:mb-0 bg-white md:bg-transparent md:w-[80%]">
                <div className="flex justify-between truncate">
                  <div>
                    <div className="text-customBlue capitalize text-primary text-base font-bold md:text-xl lg:text-2xl md:w-[40vw] truncate">
                      {event.title}
                    </div>
                    <div className="text-[10px] md:text-sm lg:text-base md:py-1 lg:pt-4 font-semibold text-[#009DA9] ">
                      EVENT
                    </div>
                    <div className=" font-normal text-[10px] md:text-xs lg:text-xs lg:pr-4 py-1 block md:hidden">
                      <span className="pr-1">DATE OF EVENT</span>
                      <span className="pl-1 font-bold">{event.date}</span>
                    </div>
                  </div>
                  <div className="pl-3 pb-3 font-medium ml-4 hidden md:flex items-center">
                    <div className="w-24 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
                      <div className="block rounded-t overflow-hidden text-center uppercase">
                        <div className="bg-customGreen text-white py-1">
                          Jun
                        </div>
                        <div className="pt-1 border-l border-r border-white bg-white text-xl font-bold leading-tight">
                          29
                        </div>
                        <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white text-sm">
                          2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" text-[#181B1E] leading-loose font-[14px] h-20 relative text-justify opacity-50 overflow-hidden text-xs md:text-sm lg:text-base mb-3">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, expedita! Quae dignissimos enim fugiat sunt
                    nesciunt necessitatibus expedita delectus blanditiis odio
                    iusto labore, voluptas sint dolorem asperiores velit at
                    tempore! Consectetur voluptatem possimus, eligendi, sit,
                    illo animi deleniti voluptate similique accusamus reiciendis
                    temporibus autem obcaecati hic quis placeat fugiat atque
                    vitae at? Assumenda dolorem quidem hic! Tenetur accusantium
                    maiores numquam! Aspernatur, error fugit quaerat voluptas
                    eius magni, laboriosam debitis rem aut earum fugiat
                    accusantium velit dolore aperiam nobis. Pariatur, officiis?
                    Saepe dolore deleniti dolorem officiis nisi aliquam ipsam
                    dicta voluptates? Ut labore ex quidem atque placeat tempore
                    sequi nobis sit cumque blanditiis ea illum, culpa ab quae
                    minus ipsa? Quam temporibus culpa eveniet eaque! Doloremque
                    dolore error explicabo nam nisi. In, labore. Perferendis
                    laudantium voluptate soluta molestias labore. Ratione
                    accusantium eum cupiditate debitis iusto nam modi nostrum
                    laborum deleniti pariatur! Quidem nesciunt ex numquam alias
                    maxime impedit obcaecati doloribus dicta.
                  </span>
                </div>
                <div className="flex justify-between items-center text-center">
                  <Button variant={"commonBtn"} className="text-white">
                    Register Now
                  </Button>
                  <div className="flex gap-2">
                    <div className="flex gap-2">
                      <FaHandHoldingMedical size={25} />
                      <span>3</span>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                      <FaRegCommentDots size={25} />
                      <span>3</span>
                    </div>
                    <div>
                      <CiShare2 size={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ViewAll />
      </div>
    </>
  );
}
