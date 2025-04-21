import React from "react";

import { FaUser } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { RiEditCircleFill } from "react-icons/ri";
import { IoMdArrowDropupCircle } from "react-icons/io";

const Messaging = () => {
  return (
    <>
      <div className="bg-[#1b1f23] px-2 py-2 flex items-center rounded-t-xl">
        <div className="flex px-2 items-center justify-between gap-12">
          <div className="flex items-center gap-2 ">
            <div className="relative p-1">
              <FaUser className="rounded-full p-0.5 size-6 border-2 border-[#b7b7b7]" />
              <div className="absolute text-[#37c898] bottom-0 right-0 rounded-full bg-[#1b1f23]">
                <GoDotFill className="size-3" />
              </div>
            </div>
            <div className="text-sm font-bold text-white">Messaging</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="">
              <HiDotsVertical className="size-4" />
            </div>
            <div className="">
              <RiEditCircleFill className="size-4" />
            </div>
            <div className="">
              <IoMdArrowDropupCircle className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messaging;
