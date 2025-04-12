import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { TbMessage2Filled } from "react-icons/tb";
import { GoBellFill } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { FaCrown } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <div className="bg-[#1b1f23] w-full h-14 rounded-b-xl">
        <div className="flex items-center h-full justify-center text-white px-60">
          <div className="p-0.5 bg-[#e9e9e9] text-[#1b1f23] rounded-sm mr-3">
            <FaLinkedinIn className="size-[1.6rem] pt-0.5" />
          </div>
          <div className="bg-[#38434f] rounded-sm flex items-center w-[17rem] h-8 px-2 mr-[8rem]">
            <HiSearch className="size-4 ml-1 mr-[7px]" />
            <input
              type="text"
              className="placeholder:text-md outline-none placeholder:text-[0.84rem]"
              placeholder="Search"
            />
          </div>
          <div className="flex border-r border-[#4b4f56]">
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative">
              <div className="">
                <GoHomeFill className="size-6" />
              </div>
              <div className="absolute bg-white rounded-full top-[2px] left-[34px] animate-bounce">
                <FaDotCircle className="text-red-600 size-[11px] " />
              </div>
              <div className="text-[11px] pt-0.5">Home</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative">
              <div className="">
                <HiUserGroup className="size-6 scale-x-[-1]" />
              </div>
              <div className="absolute bg-white rounded-full top-[2px] left-[36px] animate-bounce">
                <FaDotCircle className="text-red-600 size-[11px] " />
              </div>
              <div className="text-[11px] pt-0.5 display-6">
                My&nbsp;Network
              </div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px]">
              <div className="">
                <MdWork className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">Jobs</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative">
              <div className="">
                <TbMessage2Filled className="size-6" />
              </div>
              <div className="absolute size-[12px] bg-red-600 rounded-full top-[2px] left-[35px] flex justify-center items-center text-[10px] animate-bounce">
                3
              </div>
              <div className="text-[11px] pt-0.5">Messaging</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative">
              <div className="">
                <GoBellFill className="size-6" />
              </div>
              <div className="absolute size-[12px] bg-red-600 rounded-full top-[2px] left-[35px] flex justify-center items-center text-[10px] animate-bounce">
                7
              </div>
              <div className="text-[11px] pt-0.5">Notifications</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px]">
              <div className="">
                <img
                  src="../../public/img/Elayabarathi Pro 1.jpg"
                  alt="DP"
                  className="rounded-full size-6 border-2 border-[#b7b7b7]"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="text-[11px] pt-0.5">Profile</div>
                <FaCaretDown className="size-4" />
              </div>
            </div>
          </div>
          <div className="ml-4 flex">
            <div className="flex flex-col items-center mr-4 min-w-[60px] max-w-[80px]">
              <div className="">
                <RiSettings3Fill className="size-6" />
              </div>
              <div className="flex justify-center items-center">
                <div className="text-[11px] pt-0.5">Settings</div>
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[60px] max-w-[80px] relative">
              <div className="flex justify-center items-center">
                <FaCrown className="size-6" />
              </div>
              <div className="absolute bg-black rounded-full top-[2px] left-[38px] animate-bounce">
                <FaDotCircle className="text-yellow-500 size-[11px] " />
              </div>
              <div className="text-[11px] pt-0.5">Try&nbsp;Premium</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
