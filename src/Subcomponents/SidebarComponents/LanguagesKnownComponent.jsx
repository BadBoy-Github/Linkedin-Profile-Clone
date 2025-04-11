
import React from 'react'

import { FaPlus } from "react-icons/fa6";
import { MdOutlineModeEditOutline } from "react-icons/md";

const LanguagesKnownComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-2 mt-5 relative">
        <div className="px-4 pt-5 pb-4">
          <div className="text-[#c6c7c8] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">Languages</h1>
            <div className="flex items-center gap-3">
              <FaPlus className="size-4" />
              <MdOutlineModeEditOutline className="size-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="border-b border-[#373a3d] text-white pb-3">
              <h1 className=" font-semibold ">English</h1>
              <p className="text-[0.8rem]">Professional working proficiency</p>
            </div>
            <div className=" text-white">
              <h1 className=" font-semibold mt-3">Tamil</h1>
              <p className="text-[0.8rem]">Native or bilingual proficiency</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LanguagesKnownComponent