import { AiOutlineAudio } from "react-icons/ai";
import { BsChatSquareTextFill, BsFillPlayBtnFill } from "react-icons/bs";
import { FaBookMedical } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";

export default function HomeTiles() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:gap-6 px-4 py-4 md:px-10 md:py-10 bg-primary1 md:hidden">
        <div className="bg-white flex  items-center rounded-sm shadow-md p-2 cursor-pointer">
          <div className="gradient mr-2 p-2">
            <GiDiscussion className="text-white" size={20} />
          </div>
          <div className="font-bold md:font-semibold text-sm md:text-xl text-primary1">
            Discussion Forum
          </div>
        </div>
        <div className="bg-white flex  items-center rounded-sm shadow-md p-2 cursor-pointer">
          <div className="gradient mr-2 p-2">
            <FaBookMedical className="text-white" size={20} />
          </div>
          <div className="font-bold md:font-semibold text-sm md:text-xl text-primary1">
            Medical Tales
          </div>
        </div>
        <div className="bg-white flex  items-center rounded-sm shadow-md p-2 cursor-pointer">
          <div className="gradient mr-2 p-2">
            <AiOutlineAudio className="text-white" size={20} />
          </div>
          <div className="font-bold md:font-semibold text-sm md:text-xl text-primary1">
            Audio Dairies
          </div>
        </div>
        <div className="bg-white flex  items-center rounded-sm shadow-md p-2 cursor-pointer">
          <div className="gradient mr-2 p-2">
            <BsFillPlayBtnFill className="text-white" size={20} />
          </div>
          <div className="font-bold md:font-semibold text-sm md:text-xl text-primary1">
            Video Dairies
          </div>
        </div>
        <div className="bg-white flex  items-center rounded-sm shadow-md p-2 cursor-pointer">
          <div className="gradient mr-2 p-2">
            <BsChatSquareTextFill className="text-white" size={20} />
          </div>
          <div className="font-bold md:font-semibold text-sm md:text-xl text-primary1">
            Blogs
          </div>
        </div>
        <div className="bg-white flex  items-center rounded-sm shadow-md p-2 cursor-pointer">
          <div className="gradient mr-2 p-2">
            <SlCalender className="text-white" size={20} />
          </div>
          <div className="font-bold md:font-semibold text-sm md:text-xl text-primary1">
            Events
          </div>
        </div>
      </div>
    </>
  );
}
