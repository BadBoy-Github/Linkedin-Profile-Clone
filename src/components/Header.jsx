import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BiSolidHome } from "react-icons/bi";
import { SiGooglehome } from "react-icons/si";
import { IoPeople } from "react-icons/io5";
import { BsPersonVideo2 } from "react-icons/bs";
import { RiSuitcaseFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";
import { GoBellFill } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { FaDotCircle } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="bg-[#1b1f23] w-full h-14">
        <div className="flex items-center h-full justify-center text-white px-60">
          <div className="p-0.5 bg-[#e9e9e9] text-[#1b1f23] rounded-sm mr-3">
            <FaLinkedinIn className="size-7 pt-0.5" />
          </div>
          <div className="bg-[#38434f] rounded-sm flex items-center w-[17rem] h-8 px-2 mr-[8rem]">
            <HiSearch className="size-4 ml-1 mr-[6px]" />
            <input
              type="text"
              className="placeholder:text-md outline-none"
              placeholder="Search"
            />
          </div>
          <div className="flex border-r border-[#4b4f56]">
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative">
              <div className="">
                <SiGooglehome className="size-6" />
              </div>
              <div className="absolute bg-white rounded-full top-[2px] left-[30px]">
                <FaDotCircle className="text-red-600 size-[14px] animate" />
              </div>
              <div className="text-[11px] pt-0.5">Home</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative">
              <div className="">
                <BsPersonVideo2 className="size-6 scale-x-[-1]" />
              </div>
              <div className="absolute size-[14px] bg-red-600 rounded-full top-[2px] left-[38px] flex justify-center items-center text-[11px]">
                1
              </div>
              <div className="text-[11px] pt-0.5 display-6">
                My&nbsp;Network
              </div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px]">
              <div className="">
                <MdOutlineWork className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">Jobs</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px]">
              <div className="">
                <BiSolidMessageAlt className="size-6" />
              </div>
              <div className="text-[11px] pt-0.5">Messaging</div>
            </div>
            <div className="flex flex-col items-center mr-6 min-w-[60px] max-w-[80px] relative">
              <div className="">
                <GoBellFill className="size-6" />
              </div>
              <div className="absolute size-[14px] bg-red-600 rounded-full top-[2px] left-[32px] flex justify-center items-center text-[11px]">
                2
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
                <div className="text-[11px] pt-0.5">Me</div>
                <FaCaretDown className="size-4 ml-1" />
              </div>
            </div>
          </div>
          <div className="ml-4 flex">
            <div className="flex flex-col items-center mr-4 min-w-[60px] max-w-[80px]">
              <div className="">
                <CgMenuGridR className="size-6" />
              </div>
              <div className="flex justify-center items-center">
                <div className="text-[11px] pt-0.5">For&nbsp;Business</div>
                <FaCaretDown className="size-4 ml-1" />
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[60px] max-w-[80px]">
              <div className="">
                <img
                  src="../../public/img/Premium.png"
                  alt="Premium"
                  className="size-6"
                />
              </div>
              <div className="text-[11px] pt-0.5">
                Try&nbsp;Premium&nbsp;for&nbsp;₹0
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
