import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BiSolidHome } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="bg-[#1b1f23] w-full h-12">
        <div className="flex items-center h-full justify-center text-white px-60">
          <div className="p-0.5 bg-[#e9e9e9] text-[#1b1f23] rounded-sm mr-2">
            <FaLinkedinIn className="size-7 pt-0.5" />
          </div>
          <div className="bg-[#38434f] rounded-sm flex items-center w-60 h-8 px-2 mr-26">
            <HiSearch className="size-4 ml-2 mr-[6px]" />
            <input
              type="text"
              className="placeholder:text-md outline-none"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
            <div className="">
              <BiSolidHome className="size-6" />
            </div>
            <div className="text-[10px]">Home</div>
          </div>
          <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
            <div className="">
              <FaPeopleGroup className="size-6" />
            </div>
            <div className="text-[10px]">My Network</div>
          </div>
          <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
            <div className="">
              <BsSuitcaseLgFill className="size-6" />
            </div>
            <div className="text-[10px]">Jobs</div>
          </div>
          <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
            <div className="">
              <AiFillMessage className="size-6" />
            </div>
            <div className="text-[10px]">Messaging</div>
          </div>
          <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
            <div className="">
              <IoNotificationsSharp className="size-6" />
            </div>
            <div className="text-[10px]">Notifications</div>
          </div>
          <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
            <div className="">
              <img
                src="../../public/img/Elayabarathi Pro 1.jpg"
                alt="DP"
                className="rounded-full size-6"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="text-[10px]">Me</div>
              <FaCaretDown className="size-4 ml-1" />
            </div>
          </div>
          For Business Try Premium for free
        </div>
      </div>
    </>
  );
};

export default Header;
