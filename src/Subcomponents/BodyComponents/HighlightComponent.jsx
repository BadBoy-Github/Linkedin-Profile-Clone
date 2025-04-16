
import React from 'react'

import { IoPeople } from "react-icons/io5";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const HighlightComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 pt-7 pb-1 px-3">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Highlights</h1>
        </div>

        <div className="bg-[#38434f] py-2 px-3 mr-4 ml-2 rounded-xl text-white text-sm my-4">
          <p className="font-semibold">Expert Services</p>
          <p className="pt-1">
            Frontend Website Development, Logo Designer, Video Editor, CAD
            Designer
          </p>
          <p className="text-[#6eb1f3] font-semibold cursor-pointer hover:underline pt-1">
            Show details
          </p>
        </div>

        <div className="bg-[#38434f] py-2 px-3 mr-4 ml-2 rounded-xl text-white text-sm mt-4 mb-6">
          <p className="font-semibold">Expert Services</p>
          <p className="pt-1">
            Frontend Website Development, Logo Designer, Video Editor, CAD
            Designer
          </p>
          <p className="text-[#6eb1f3] font-semibold cursor-pointer hover:underline pt-1">
            Show details
          </p>
        </div>
      </div>
    </>
  );
}

export default HighlightComponent