import { MdEvent, MdVolunteerActivism } from "react-icons/md";

export default function StickySlide() {
  return (
    <>
      <div className="flex fixed origin-right z-0 right-4 md:right-6 top-24 justify-center -rotate-90 gap-2 items-center bg-customGreen h-8 w-40 md:h-12 md:w-52 rounded-t-md">
        <MdEvent size={20} className="text-white" />
        <div className="text-xs md:text-base text-white font-semibold">
          Request an Event
        </div>
      </div>
      <div className="flex fixed origin-right z-0 right-4 md:right-6 top-96 justify-center -rotate-90 gap-2 items-center bg-primary1 h-8 w-40 md:h-12 md:w-52 rounded-t-md">
        <MdVolunteerActivism size={20} className="text-white" />
        <div className="text-xs md:text-base text-white font-semibold">
          Become A Volunteer
        </div>
      </div>
    </>
  );
}
