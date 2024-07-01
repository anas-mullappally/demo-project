/* eslint-disable @next/next/no-img-element */
"use client";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "./ui/button";
import { userStore } from "@/store/store";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const { googleSignIn } = userStore();

  const handleGoogleSignIn = async () => {
    await googleSignIn();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg w-1/2 h-1/2 flex ">
        <div className=" relative hidden lg:block w-1/2 bg-black">
          <img src="/dr.jpg" alt="dr" className="w-full h-full object-cover" />
        </div>
        <div className=" relative flex flex-col md:h-full h-screen lg:w-2/4 w-full items-center px-14">
          <MdOutlineClose
            onClick={onClose}
            className="absolute top-7 right-7 cursor-pointer"
          />
          <div className="flex flex-col items-center py-14 overflow-hidden">
            <div className="font-semibold text-sm md:text-2xl py-2 md:pb-4 md:py-0">
              Welcome to,
            </div>
            <div className="font-semibold text-base md:text-2xl text-center px-4">
              Manipal Community Connect.
            </div>
            <div className="py-4 md:py-20 flex justify-center w-full">
              <Button variant={"default"} onClick={handleGoogleSignIn}>
                Sign In With Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
