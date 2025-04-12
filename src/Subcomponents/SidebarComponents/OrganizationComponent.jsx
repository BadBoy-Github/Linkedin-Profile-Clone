
import React from 'react'

import { FaPlus } from "react-icons/fa6";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const OrganizationComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-2 mt-3 relative">
        <div className="px-4 pt-5 pb-4">
          <div className="text-[#c6c7c8] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">
              Organizations
            </h1>
            <div className="flex items-center gap-3">
              <FaPlus className="size-4" />
              <MdOutlineModeEditOutline className="size-4" />
            </div>
          </div>
          <div className="mt-4 pr-1">
            <div className="text-white pb-3">
              <h1 className=" font-semibold ">JCI - Erode Galaxy</h1>
              <div className="flex items-center text-[0.84rem] pt-1">
                <p className="">Member</p>
                <div className="px-1">
                  <GoDotFill className="size-[0.4rem]" />
                </div>
                <p>Jan 2020 - Present</p>
              </div>
              <p className="text-[0.8rem] text-[#8d8f91] pt-1">
                Developed leadership skills through community projects,
                networking with young entrepreneurs, and organizing local impact
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrganizationComponent