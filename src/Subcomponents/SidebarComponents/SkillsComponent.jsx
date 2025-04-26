import React from "react";

import { FaArrowUp } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

const SkillsComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-2">
        <div className="px-4  pb-3 pt-5">
          <div className="text-[#c6c7c8] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">Skills</h1>
          </div>
          <div className="mt-1 pr-1 text-white pb-3">
            <div className="flex items-center justify-between">
              <h1 className=" font-semibold text-sm">React JS</h1>
              <div className="bg-[#6eb1f3] p-1 rounded-full text-[#1b1f23] flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-[#4aa1f8] transition-all duration-400">
                <FaArrowUp className="size-[1rem]" />
              </div>
            </div>
            <div className="flex flex-wrap items-center text-[0.84rem] pt-1 gap-2">
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                Full Stack Dev Intern at Corizo
              </div>
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                eCommerce Website
              </div>
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                Spotify Clone
              </div>
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                ···
              </div>
            </div>
          </div>
          <div className="mt-1 pr-1 text-white pb-3">
            <div className="flex items-center justify-between">
              <h1 className=" font-semibold text-sm">Tailwind CSS</h1>
              <div className="bg-[#6eb1f3] p-1 rounded-full text-[#1b1f23] flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-[#4aa1f8] transition-all duration-400">
                <FaArrowUp className="size-[1rem]" />
              </div>
            </div>
            <div className="flex flex-wrap items-center text-[0.84rem] pt-1 gap-2">
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                Full Stack Dev Intern at Corizo
              </div>
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                eCommerce Website
              </div>
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                Spotify Clone
              </div>
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                ···
              </div>
            </div>
          </div>
          <div className="mt-1 pr-1 text-white pb-3">
            <div className="flex items-center justify-between">
              <h1 className=" font-semibold text-sm">JavaScript</h1>
              <div className="bg-[#6eb1f3] p-1 rounded-full text-[#1b1f23] flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-[#4aa1f8] transition-all duration-400">
                <FaArrowUp className="size-[1rem]" />
              </div>
            </div>
            <div className="flex flex-wrap items-center text-[0.84rem] pt-1 gap-2">
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                Full Stack Dev Trainee at Corizo
              </div>
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                Frontend Shopping List App
              </div>
              <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                ···
              </div>
            </div>
          </div>

          <div className="mt-1 flex  justify-center items-center border-t border-[#373a3d] group cursor-pointer">
            <div className="mt-2 flex justify-center items-center gap-2 ">
              <p className="text-sm font-semibold">Show all 56 skills </p>
              <div className="group-hover:scale-125 group-hover:animate-pulse transition-all duration-400">
                <IoMdArrowRoundForward className="size-[1rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsComponent;
