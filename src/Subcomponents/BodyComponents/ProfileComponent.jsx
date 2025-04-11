import React from "react";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { HiExternalLink } from "react-icons/hi";

const ProfileComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-5 mb-1 pb-1">
        <div className="rounded-t-xl w-full h-full relative">
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

        <div className="relative">
          <div className="absolute text-[#c6c7c8] bottom-46 right-6">
            <MdOutlineModeEditOutline className="size-[1.6rem]" />
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
              <p className="text-white text-[1.04rem] pt-0.5">
                Biotechnologist | Frontend Web Dev | Enthusiast in Scientific &
                Technological Innovations
              </p>
              <div className="flex items-center mt-1 text-[#999b9d] font-semibold text-[0.82rem]">
                <p>Namakkal, Tamil Nadu, India</p>
                <div className="px-1">
                  <GoDotFill className="size-[0.4rem]" />
                </div>
                <p className="text-[#6eb1f3] hover:underline">Contact info</p>
              </div>
            </div>

            <div className="flex items-center text-[#6eb1f3] text-[0.82rem] font-semibold mt-1">
              <p className="hover:underline">Portfolio</p>
              <div className="text-lg pl-1">
                <HiExternalLink className="size-4" />
              </div>
            </div>

            <div className="flex items-center text-[#6eb1f3] text-[0.82rem] font-semibold mt-1">
              <p className="hover:underline">2,464 followers</p>
              <div className="px-1 text-white">
                <GoDotFill className="size-[0.4rem]" />
              </div>
              <p className="hover:underline">500+ connections</p>
            </div>
          </div>
        </div>

        <div className="mx-5 flex items-center">
          <button className="bg-[#6eb1f3] text-[#38434f] rounded-full px-4 py-1 text-base font-semibold">
            Open to
          </button>
          <button className="text-[#6eb1f3] border-1 border-[#6eb1f3] rounded-full px-4 ml-3 py-1 text-base font-semibold">
            Add profile section
          </button>
          <button className="text-[#6eb1f3] border-1 border-[#6eb1f3] rounded-full px-4 ml-3 py-1 text-base font-semibold">
            Enhance profile
          </button>
          <button className="text-[#c1c1c1] border-1 border-[#c1c1c1] rounded-full px-4 ml-3 py-1 text-base font-semibold">
            Resources
          </button>
        </div>

        <div className="bg-[#38434f] py-2 px-3 mx-5 rounded-xl text-white text-sm w-3/4 my-6">
          <p className="font-semibold">Open to work</p>
          <p className="">
            Microbiologist, Biotechnologist, Biological Technician, Video Editor
            and Computer Technician roles
          </p>
          <p className="text-[#6eb1f3] font-semibold hover:underline">
            Show details
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
