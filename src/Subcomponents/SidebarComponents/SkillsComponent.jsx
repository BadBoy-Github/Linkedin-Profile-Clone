
import React from 'react'

import { FaArrowUp } from "react-icons/fa";

const SkillsComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-2">
        <div className="px-4 pt-5 pb-4">
          <div className="text-[#c6c7c8] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">Skills</h1>
          </div>
          <div className="mt-4 pr-1">
            <div className="text-white pb-3">
              <div className="flex items-center justify-between pr-1">
                <h1 className=" font-semibold ">React JS</h1>
                <div className="bg-">
                    <FaArrowUp className='size-[1rem]'/>
                </div>
              </div>
              <div className="flex flex-wrap items-center text-[0.84rem] pt-1 w-[90%] bg-red-500 gap-2">
                <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                  Full Stack Dev Intern at Corizo
                </div>
                <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                  eCommerce Website
                </div>
                <div className="flex items-center justify-center text-[0.6rem] px-2 py-0.5 bg-[#38434f] rounded-xl whitespace-nowrap">
                  Spotify Clone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsComponent