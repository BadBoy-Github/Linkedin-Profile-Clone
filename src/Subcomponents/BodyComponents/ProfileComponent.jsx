import React from "react";

import { MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { MdHandshake } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

const ProfileComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-5 mb-2 pb-1">
        <div className="rounded-t-xl w-full h-full relative">
          <img
            src="../../public/img/LinkedIn Banner.png"
            alt="linkedin banner"
            className="w-full rounded-t-xl rounded-b-sm active:outline outline-[#999b9d] cursor-pointer"
          />
          <div className="absolute size-[19%] top-[45%] left-[3%] ">
            <img
              src="../../public/img/LinkedIn Profile.jpg"
              alt="linkedin profile"
              className="absolute rounded-full border-[4px] border-[#1b1f23]"
            />
            <img
              src="../../public/img/LinkedIn OTW.png"
              alt="OTW"
              className="absolute rounded-full border-[4px] border-[#1b1f23]"
            />
          </div>
        </div>

        <div className="">
          <div className="mt-[6%] p-5">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-semibold">
                Elayabarathi M V
              </h1>
              <div className="text-[#6eb1f3] text-[1.3rem] ml-3">
                <MdVerified />
              </div>
              <p className="text-[#6f7274] text-sm ml-2 font-extralight">
                (He/Him)
              </p>
            </div>

            <div className="">
              <p className="text-white text-[1.04rem] pt-0.5">
                Biotechnologist | Frontend Web Dev | Enthusiast in Scientific &
                Technological Innovations
              </p>
              <div className="flex items-center mt-1 text-[#999b9d] text-[0.82rem]">
                <p className="font-semibold ">Namakkal, Tamil Nadu, India</p>
                <div className="px-1">
                  <GoDotFill className="size-[0.4rem]" />
                </div>
                <p className="text-[#6eb1f3] font-bold hover:underline cursor-pointer ">
                  Contact info
                </p>
              </div>
            </div>

            <div className="flex items-center text-[#6eb1f3] text-[0.82rem] font-semibold mt-1">
              <p className="hover:underline cursor-pointer">2,479 followers</p>
              <div className="px-1 text-white">
                <GoDotFill className="size-[0.4rem]" />
              </div>
              <p className="hover:underline cursor-pointer">
                2,467 connections
              </p>
            </div>
          </div>
        </div>

        <div className="mx-5 flex items-center gap-3">
          <button className="bg-[#6eb1f3] hover:bg-[#4aa1f8] active:bg-[#6eb1f3] transition-all duration-300 text-[#38434f] rounded-full px-4 py-1 text-base font-semibold flex items-center gap-2 cursor-pointer">
            <div className="text-[1.2rem]">
              <BiSolidSend />
            </div>
            Message
          </button>
          <button className="text-[#6eb1f3] outline-1 outline-[#6eb1f3] hover:outline-[#4aa1f8] hover:text-[#4aa1f8] transition-all rounded-full px-4 py-1 text-base font-semibold flex items-center gap-2 cursor-pointer">
            <div className="text-[1.2rem]">
              <MdHandshake />
            </div>
            Connect
          </button>
          <button className="text-[#6eb1f3] outline-1 outline-[#6eb1f3] hover:outline-[#4aa1f8] hover:text-[#4aa1f8] transition-all rounded-full px-4 py-1 text-base font-semibold flex items-center gap-2 cursor-pointer">
            <div className="text-[1.2rem]">
              <FaUserPlus />
            </div>
            Follow
          </button>
          <button className="text-[#c1c1c1] outline-1 outline-[#c1c1c1] hover:outline-white hover:text-white transition-all rounded-full px-4 py-1 text-base font-semibold flex items-center gap-2 cursor-pointer group">
            More
            <span className="text-[1.2rem] hidden group-hover:block">
              <MdOutlineExpandMore />
            </span>
          </button>
        </div>

        <div className=" flex">
          <div className="bg-[#38434f] py-2 px-3 ml-5 mr-2 rounded-xl text-white text-sm my-6 w-1/2">
            <p className="font-semibold">Open to work</p>
            <p className="pt-1">
              Microbiologist, Biotechnologist, Biological Technician, Video
              Editor and Computer Technician roles
            </p>
            <p className="text-[#6eb1f3] font-semibold cursor-pointer hover:underline pt-1 w-fit">
              Show details
            </p>
          </div>
          <div className="bg-[#38434f] py-2 px-3 mr-5 ml-2 rounded-xl text-white text-sm my-6 w-1/2">
            <p className="font-semibold">Expert Services</p>
            <p className="pt-1">
              Frontend Website Development, Logo Designer, Video Editor, CAD
              Designer
            </p>
            <p className="text-[#6eb1f3] font-semibold cursor-pointer hover:underline pt-1 w-fit">
              Show details
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
