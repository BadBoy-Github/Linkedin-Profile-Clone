
import React from 'react'

import { MdOutlineModeEditOutline } from "react-icons/md";

const UrlComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-2 mt-5">
        <div className="px-4 py-4 ">
          <div className=" relative">
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

export default UrlComponent;