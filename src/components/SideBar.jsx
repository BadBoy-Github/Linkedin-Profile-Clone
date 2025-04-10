
import React from 'react'

import { MdOutlineModeEditOutline } from "react-icons/md";

const SideBar = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-full w-1/4 rounded-xl ml-2 my-5">
        <div className="px-4 py-4" id="top1">
          <div className="border-b-2 border-[#373a3d] pb-4 relative" id="pl">
            <div className="absolute text-[#c6c7c8] top-0 right-0">
              <MdOutlineModeEditOutline />
            </div>
            <div className="text-[#e9e9e9]">
              <h1 className="text-[18px] font-semibold">Profile language</h1>
              <p className="text-[14px] pt-0.5 text-[#8d8f91]">English</p>
            </div>
          </div>

          <div className="pt-4 relative" id="ppu">
            <div className="absolute text-[#c6c7c8] top-4 right-0">
              <MdOutlineModeEditOutline />
            </div>
            <div className="text-[#e9e9e9]">
              <h1 className="text-[18px] font-semibold">
                Public Profile & URL
              </h1>
              <p className="text-[14px] pt-0.5 text-[#8d8f91]">
                www.linkedin.com/in/elayabarathi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar