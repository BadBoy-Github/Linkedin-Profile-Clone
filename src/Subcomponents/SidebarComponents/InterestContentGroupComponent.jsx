import React from "react";

import { IoMdAdd } from "react-icons/io";

const InterestContentGroupComponent = () => {
  return (
    <>
      <div className="mt-3 px-4 text-white">
        <div className="flex">
          <div className="mr-1">
            <img
              src="/public/img/IBM.png"
              alt=""
              className="size-[3rem] px-2 py-3 bg-white rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center ml-1">
            <p className="text-base font-semibold text-white">IBM</p>
            <p className="text-xs text-gray-400">18,132,440 followers</p>
          </div>
          <div className="flex items-center ml-auto">
            <button className="text-sm bg-[#6eb1f3] text-[#1b1f23] p-1 rounded-full hover:rotate-90 hover:bg-[#4aa1f8] transition-all duration-400">
              <IoMdAdd className="size-4" />
            </button>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="mr-1">
            <img
              src="/public/img/Microsoft.png"
              alt=""
              className="size-[3rem] px-2 py-2 bg-white rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center ml-1">
            <p className="text-base font-semibold text-white">Microsoft</p>
            <p className="text-xs text-gray-400">25,283,281 followers</p>
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

export default InterestContentGroupComponent;
