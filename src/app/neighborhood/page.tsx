import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BsPersonVcard } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";

function page() {
  return (
    <div className="min-h-[72vh] md:min-h-[65vh] lg:min-h-[50vh]">
      <div className="bg-gradient2 flex items-center justify-center ">
        <Image src={"/nhBanner.webp"} alt="banner" width={2000} height={355} />
      </div>

      <div>
        <p className="text-16 lg:text-[20px] flex justify-center items-center py-2 bg-customBlue text-white">
          What is Neighborhood Card?
        </p>
        <div className="p-4">
          <p className="text-sm  lg:text-lg text-justify md:px-10 ">
            Neighborhood Privilege Card is an initiative under Manipal
            Neighborhood Connect Programme specifically focused on building
            community engagement and providing health access to residents at any
            of the units of Manipal Hospitals, Bengaluru.
          </p>
          <br />
          <p className="text-sm  lg:text-lg text-justify md:px-10 ">
            Under this program, residents receive benefits such as - emergency
            admission, consultation, health checks, discounted health check-up
            packages, and other healthcare services, health awareness camps,
            vaccination drives, and other community events for residents.
          </p>
          <br />
          <p className="text-sm  lg:text-lg text-justify md:px-10">
            {
              "Make sure to utilize it for exclusive perks and discounts on services during your hospital visit. If you haven't received it or  are new to the apartment, please apply here or contact management for assistance."
            }
          </p>
        </div>
      </div>
      <div>
        <p className="text-16 lg:text-[20px] flex justify-center items-center py-2  bg-customBlue text-white">
          How to get Neighborhood Card?
        </p>
        <div className="flex lg:flex-row flex-col justify-center items-center py-4">
          <div className="flex flex-col justify-center items-center px-2">
            <BsPersonVcard size={35} className="text-customBlue" />
            <p className="pt-2 text-sm lg:text-lg">Apply for a Card from</p>
            <p className="pt-1 lg:pt-2 text-sm lg:text-lg">
              My Profile Section
            </p>
          </div>
          <span className="block lg:hidden border-l-[1px] my-2 h-5 gradient1"></span>
          <span className="hidden lg:block border-b-[1px] gradient1 w-36"></span>
          <div className="flex flex-col justify-center items-center px-2">
            <CiClock2 size={35} className="text-customBlue" />
            <p className="pt-2 text-sm lg:text-lg">Wait for Approval</p>
          </div>
          <span className="block lg:hidden border-l-[1px] my-2 h-5 gradient1"></span>
          <span className="hidden lg:block border-b-[1px] gradient1 w-36"></span>
          <div className="flex flex-col justify-center items-center px-2">
            <MdOutlineFileDownload size={35} className="text-customBlue" />
            <p className="pt-2 text-sm lg:text-lg">Download Card</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-16 lg:text-[20px] flex justify-center items-center py-2 bg-customBlue text-white">
          Discounts Curated Especially for you
        </p>

        <ul className="text-lg text-justify p-4 md:px-14 md:py-6 list-disc">
          <li className="text-sm lg:text-lg">
            10% discount on Out Patient Consultation
          </li>
          <li className="pt-2 text-sm lg:text-lg">
            10% discount on all Out Patient procedures
          </li>
          <li className="pt-2 text-sm lg:text-lg">
            15% discount on Out Patient Lab tests
          </li>
          <li className="pt-2 text-sm lg:text-lg">
            15% discount on Out Patient radiology (CT, MRI &amp; X-ray)
          </li>
          <li className="pt-2 text-sm lg:text-lg">
            Discount of 20% on Health check packages
          </li>
        </ul>
      </div>
      <div>
        <p className="text-16 lg:text-[20px] flex justify-center items-center py-2 bg-customBlue text-white">
          Terms and Conditions
        </p>
        <ul className="text-lg text-justify p-4 md:px-14 md:py-6 list-disc">
          <li className="text-sm lg:text-lg">Prior appointment is mandatory</li>
          <li className="pt-2 text-sm lg:text-lg">
            Privilege card shall be presented at the time of availing services
          </li>
          <li className="pt-2 text-sm lg:text-lg">
            The card benefits cannot be clubbed with any other offer and is
            applicable in the hospital cash tariff
          </li>
          <li className="pt-2 text-sm lg:text-lg">
            Please note the discount on Health Check Packages varies amongst
            units
          </li>
          <li className="pt-2 text-sm lg:text-lg">
            If you are creating a new hospital no (UHID), registration fee will
            apply and to be paid when one visits the hospital.
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <Button className="gradient cursor-pointer h-8 mb-4 md:h-10 w-20 md:w-40 text-xs md:text-base md:px-4 px-2 py-1 md:py-2">
          Apply Now
        </Button>
      </div>

      <div className="text-center mb-5">
        <div>
          For any queries, please call
          <Link
            href="tel:18002032999"
            className="text-blue-600 hover:text-blue-800 "
          >
            18002032999
          </Link>
          or mail us at
          <Link
            href="mailto:community.connect@manipalhospitals.com"
            className="underline text-blue-600 hover:text-blue-800"
          >
            community.connect@manipalhospitals.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
