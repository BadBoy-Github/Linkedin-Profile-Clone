
import React from 'react'

import { IoMdAdd } from "react-icons/io";

const InterestContentAllComponent = ({c1name, c1followers, c1img, c2name, c2followers, c2img}) => {
  return (
    <>
      <div className="mt-3 px-4 text-white">
        <div className="flex items-center justify-between">
          <div className="mr-1">
            <div className="size-[2rem] flex items-center justify-center">
              <img
                src={c1img}
                alt="logo"
                className="max-h-[2rem] max-w-[2rem] rounded-xl cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center ml-1">
            <p className="text-sm font-semibold text-white hover:text-[#6eb1f3] hover:underline cursor-pointer w-fit">
              {c1name}
            </p>
            <p className="text-xs text-gray-400 w-fit cursor-pointer">
              {c1followers}
            </p>
          </div>
          <div className="flex items-center ml-auto">
            <button className="text-sm bg-[#6eb1f3] text-[#1b1f23] p-1 rounded-full hover:rotate-90 hover:bg-[#4aa1f8] transition-all duration-400 cursor-pointer">
              <IoMdAdd className="size-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="mr-1">
            <div className="size-[2rem] flex items-center justify-center bg-white rounded-xl">
              <img
                src={c2img}
                alt="logo"
                className="max-h-[2rem] max-w-[2rem] rounded-xl cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center ml-1">
            <p className="text-sm font-semibold text-white hover:text-[#6eb1f3] hover:underline cursor-pointer w-fit">
              {c2name}
            </p>
            <p className="text-xs text-gray-400 w-fit cursor-pointer">
              {c2followers}
            </p>
          </div>
          <div className="flex items-center ml-auto">
            <button className="text-sm bg-[#6eb1f3] text-[#1b1f23] p-1 rounded-full hover:rotate-90 hover:bg-[#4aa1f8] transition-all duration-400 cursor-pointer">
              <IoMdAdd className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestContentAllComponent