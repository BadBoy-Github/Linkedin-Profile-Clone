import React from "react";

import { FaUser } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { TbMessage2Filled } from "react-icons/tb";
import { GoBellFill } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { FaCrown } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <div className="bg-[#1b1f23] w-full h-14 rounded-b-xl">
        <div className="flex items-center h-full justify-center text-white px-60">
          <div className="p-0.5 bg-[#e9e9e9] text-[#1b1f23] rounded-sm mr-3 cursor-pointer">
            <FaLinkedinIn className="size-[1.6rem] pt-0.5" />
          </div>
          <div className="bg-[#38434f] rounded-sm xl:flex items-center w-[17rem] h-8 px-2 mr-[8rem] hidden">
            <HiSearch className="size-4 ml-1 mr-[7px]" />
            <input
              type="text"
              className="placeholder:text-md outline-none placeholder:text-[0.84rem]"
              placeholder="Search"
            />
          </div>
          <div className="flex border-r border-[#4b4f56] text-[#cccccc]">
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative hover:text-white hover:cursor-pointer">
              <div className="">
                <GoHomeFill className="size-6 " />
              </div>
              <div className="absolute bg-red-500 rounded-full top-[2px] left-[34px] size-[12px] flex items-center justify-center animate-ping"></div>
              <div className="absolute bg-red-500 rounded-full top-[3px] left-[35px] size-[10px] flex items-center justify-center"></div>
              <div className="text-[11px] pt-0.5">Home</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative hover:text-white hover:cursor-pointer">
              <div className="">
                <HiUserGroup className="size-6 scale-x-[-1]" />
              </div>
              <div className="absolute bg-red-500 rounded-full top-[2px] left-[34px] size-[12px] flex items-center justify-center animate-ping"></div>
              <div className="absolute bg-red-500 rounded-full top-[3px] left-[35px] size-[10px] flex items-center justify-center"></div>
              <div className="text-[11px] pt-0.5 display-6">
                My&nbsp;Network
              </div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] hover:text-white hover:cursor-pointer">
              <div className="">
                <MdWork className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">Jobs</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative hover:text-white hover:cursor-pointer">
              <div className="">
                <TbMessage2Filled className="size-6" />
              </div>
              <div className="absolute bg-red-500 rounded-full top-[2px] left-[34px] size-[12px] flex items-center justify-center animate-ping"></div>
              <div className="absolute bg-red-500 rounded-full top-[3px] left-[35px] size-[10px] flex items-center justify-center"></div>
              <div className="text-[11px] pt-0.5">Messaging</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative hover:text-white hover:cursor-pointer">
              <div className="">
                <GoBellFill className="size-6" />
              </div>
              <div className="absolute bg-red-500 rounded-full top-[2px] left-[34px] size-[12px] flex items-center justify-center animate-ping"></div>
              <div className="absolute bg-red-500 rounded-full top-[3px] left-[35px] size-[10px] flex items-center justify-center"></div>
              <div className="text-[11px] pt-0.5">Notifications</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] hover:text-white hover:cursor-pointer">
              <div className="">
                <FaUser className="rounded-full p-0.5 size-6 border-2 border-[#b7b7b7]" />
              </div>
              <div className="flex justify-center items-center">
                <div className="text-[11px] pt-0.5">Profile</div>
                <FaCaretDown className="size-4" />
              </div>
            </div>
          </div>
          <div className="ml-4 flex text-[#b8b8b8]">
            <div className="flex flex-col items-center mr-4 min-w-[60px] max-w-[80px] hover:text-white hover:cursor-pointer">
              <div className="">
                <RiSettings3Fill className="size-6" />
              </div>
              <div className="flex justify-center items-center">
                <div className="text-[11px] pt-0.5">Settings</div>
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[60px] max-w-[80px] relative hover:text-white hover:cursor-pointer">
              <div className="flex justify-center items-center">
                <FaCrown className="size-6" />
              </div>
              <div className="absolute bg-yellow-500 rounded-full top-[2px] left-[38px] size-[12px] flex items-center justify-center animate-ping"></div>
              <div className="absolute bg-yellow-500 rounded-full top-[3px] left-[39px] size-[10px] flex items-center justify-center"></div>
              <div className="text-[11px] pt-0.5">Try&nbsp;Premium</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
