/* eslint-disable @next/next/no-img-element */
import { CgCopyright } from "react-icons/cg";
import { FaDribbble, FaFacebook, FaGit, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-8 text-white">
      <div className="pt-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4 ">
            <div className="bg-white flex justify-center item-center p-2 rounded-lg mb-7 w-20 md:w-[170px]">
              <img
                src="/logo.svg"
                alt="logo"
                className="h-full w-full object-fit"
              />
            </div>
            <div className="text-[10px] md:text-sm w-40 md:w-72 text-white">
              98, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560017
            </div>
            <div className="flex gap-3 mt-6 pb-5 lg:mb-0 mb-10">
             
                <FaTwitter size={20} className="text-white" />
              
             
                <FaFacebook size={20} className="text-white" />
              
              
                <FaDribbble size={20} className="text-white" />
             
                <FaGit size={20} className="text-white" />
              
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 bg-primary1">
          <section className="col-span-1 text-[6px] md:text-base">
            <div className="flex text-white py-2 justify-center items-center">
              <div className="px-1 md:px-3">Copyright</div>
              <CgCopyright size={20} />
              <div className="px-1 md:px-3">
                2023 Manipal Hospitals - All Rights Reserved
              </div>
            </div>
          </section>
          <section className="col-span-1 text-white justify-center py-2 hidden md:flex">
            <a className="px-4" href="/csr-policy">
              CSR Policy
            </a>
            <a className="px-4" href="/disclaimer">
              Disclaimer
            </a>
            <a className="px-4" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="px-4" href="/terms-and-conditions">
              Terms &amp; Conditions
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
}
