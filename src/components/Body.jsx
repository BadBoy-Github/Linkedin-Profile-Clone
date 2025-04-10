
import React from 'react'

import { MdOutlineModeEditOutline } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { HiExternalLink } from "react-icons/hi";

const Body = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-full w-4/5 rounded-xl mr-2 my-5">
        <div className="rounded-t-xl w-full h-full relative" id="pics">
          <img
            src="../../public/img/LinkedIn Banner.png"
            alt="linkedin banner"
            className="w-full rounded-t-xl"
          />
          <div className="absolute  text-blue-600 bg-white rounded-full p-1 size-7 flex items-center justify-center top-5 right-5">
            <MdOutlineModeEditOutline />
          </div>
          <div className="absolute size-[8rem] md:size-[11rem] top-[44%] left-[3%] rounded-full border-[6px] border-[#1b1f23]">
            <img
              src="../../public/img/LinkedIn Profile.jpg"
              alt="linkedin profile"
              className="absolute rounded-full"
            />
            <img
              src="../../public/img/LinkedIn OTW.png"
              alt="OTW"
              className="absolute"
            />
          </div>
        </div>

        <div className="mt-[3rem] p-5">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-semibold">
              Elayabarathi M V
            </h1>
            <div className="text-[#d0d1d2] text-[1.6rem] ml-2">
              <BiCheckShield />
            </div>
            <p className="text-[#6f7274] text-sm ml-2">(He/Him)</p>
          </div>

          <div className="">
            <p className="text-white text-[1.04rem] pt-1">
              Biotechnologist | Frontend Web Dev | Enthusiast in Scientific &
              Technological Innovations
            </p>
            <div className="flex items-center mt-2 text-[#999b9d] font-semibold text-[0.82rem]">
              <p>Namakkal, Tamil Nadu, India</p>
              <div className="px-1">
                <GoDotFill className="size-[0.4rem]" />
              </div>
              <p className="text-[#6eb1f3]">Contact info</p>
            </div>
          </div>

          <div className="flex items-center">
            <p>Portfolio</p>
            <div className="">
              <HiExternalLink />
            </div>
          </div>

          <div className="flex items-center text-[#6eb1f3] text-[0.82rem] font-semibold mt-2">
            <p>2,464 followers</p>
            <div className="px-1 text-white">
              <GoDotFill className="size-[0.4rem]" />
            </div>
            <p>500+ connections</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body