
import React from 'react'

import { IoMdAdd } from "react-icons/io";

const InterestContentAllComponent = ({c1name, c1followers, c1img, c2name, c2followers, c2img}) => {
  return (
    <>
      <div className="mt-3 px-4 text-white">
        <div className="flex items-center justify-between">
          <div className="mr-1">
            <img
              src={c1img}
              alt="logo"
              className="size-[2rem] px-1 py-2 bg-white rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center ml-1">
            <p className="text-sm font-semibold text-white">{c1name}</p>
            <p className="text-xs text-gray-400">{c1followers}</p>
          </div>
          <div className="flex items-center ml-auto">
            <button className="text-sm bg-[#6eb1f3] text-[#1b1f23] p-1 rounded-full hover:rotate-90 hover:bg-[#4aa1f8] transition-all duration-400">
              <IoMdAdd className="size-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="mr-1">
            <img
              src={c2img}
              alt="logo"
              className="size-[2rem] px-1 py-1 bg-white rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center ml-1">
            <p className="text-sm font-semibold text-white">{c2name}</p>
            <p className="text-xs text-gray-400">{c2followers}</p>
          </div>
          <div className="flex items-center ml-auto">
            <button className="text-sm bg-[#6eb1f3] text-[#1b1f23] p-1 rounded-full hover:rotate-90 hover:bg-[#4aa1f8] transition-all duration-400">
              <IoMdAdd className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestContentAllComponent