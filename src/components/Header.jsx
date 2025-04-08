import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BiSolidHome } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";


const Header = () => {
  return (
    <>
      <div className="bg-[#1b1f23] w-full h-14">
        <div className="flex items-center h-full justify-center text-white px-60">
          <div className="p-0.5 bg-[#e9e9e9] text-[#1b1f23] rounded-sm mr-3">
            <FaLinkedinIn className="size-7 pt-0.5" />
          </div>
          <div className="bg-[#38434f] rounded-sm flex items-center w-74 h-8 px-2 mr-28">
            <HiSearch className="size-4 ml-1 mr-[6px]" />
            <input
              type="text"
              className="placeholder:text-md outline-none"
              placeholder="Search"
            />
          </div>
          <div className="flex border-r border-[#4b4f56] pr-8">
            <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
              <div className="">
                <BiSolidHome className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">Home</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
              <div className="">
                <FaPeopleGroup className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">My Network</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
              <div className="">
                <BsSuitcaseLgFill className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">Jobs</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
              <div className="">
                <AiFillMessage className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">Messaging</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[50px] max-w-[60px]">
              <div className="">
                <IoNotificationsSharp className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">Notifications</div>
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
                <div className="text-[11px] pt-0.5">Me</div>
                <FaCaretDown className="size-4 ml-1" />
              </div>
            </div>
          </div>
          <div className="ml-10 flex">
            <div className="flex flex-col items-center mr-6 min-w-[80px] max-w-[100px]">
              <div className="">
                <CgMenuGridR className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">For Business</div>
            </div>
            <div className="flex flex-col items-center mr-2 min-w-[80px] max-w-[100px]">
              <div className="">
                <img
                  src="../../public/img/Premium.png"
                  alt="Premium"
                  className="size-6"
                />
              </div>
              <div className="text-[11px] pt-0.5">Try Premium for ₹0</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
