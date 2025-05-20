
import React from 'react'

import { GoDotFill } from "react-icons/go";

const OrganizationComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-2">
        <div className="px-4 pt-5 pb-4">
          <div className="text-[#c6c7c8] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">
              Organizations
            </h1>
          </div>
          <div className="mt-4 pr-1 border-b border-[#373a3d]">
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
                Built leadership through community projects, networking with
                entrepreneurs, and organizing impactful local initiatives.
              </p>
            </div>
          </div>
          <div className="mt-4 pr-1">
            <div className="text-white pb-3">
              <h1 className=" font-semibold ">PMC & PAC Club - KSRCT</h1>
              <div className="flex items-center text-[0.84rem] pt-1">
                <p className="">Secretary</p>
                <div className="px-1">
                  <GoDotFill className="size-[0.4rem]" />
                </div>
                <p>Jun 2022 - May 2024</p>
              </div>
              <p className="text-[0.8rem] text-[#8d8f91] pt-1">
                Led by Dr. K. Syed Zameer Ahmed, empower communities through
                awareness on health, sustainability, and eco-friendly farming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrganizationComponent