"use client";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const CardGrid = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const cards = [
    {
      id: 1,
      text: "All Specialties",
    },
    {
      id: 2,
      text: "Informative-Medical",
    },
    {
      id: 3,
      text: "Internal Medicine",
    },
    {
      id: 4,
      text: "Cardiology",
    },
    {
      id: 5,
      text: "OBJ",
    },
    {
      id: 6,
      text: "Orthopedics",
    },
    {
      id: 7,
      text: "Neurology",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-y-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 mt-4 md:mt-10 justify-center md:mx-0 px-5 md:px-10 lg:px-14">
      {cards.slice(0, isSmallScreen ? 3 : cards.length).map((item) => (
        <div
          key={item.id}
          className="bg-gradient2 uppercase flex text-xs text-center  leading-[10px] w-full h-20 md:h-28 md:leading-6  rounded-md md:flex justify-center items-center text-white col-span-1 text-[8px] md:text-base px-4 md:py-4 font-normal md:font-bold"
        >
          {item.text}
        </div>
      ))}
      <div className="py-1 leading-[10px] flex bg-white border-[1px] md:border-2 rounded-md border-[#009DA9] flex-col justify-center items-center col-span-1 w-full text-[#009DA9]">
        <div className="mb-2">View All</div>
        <FaRegArrowAltCircleRight size={20} />
      </div>
    </div>
  );
};

export default CardGrid;
