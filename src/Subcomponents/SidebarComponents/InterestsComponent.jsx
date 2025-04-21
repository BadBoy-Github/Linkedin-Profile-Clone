
import React from 'react'

import { GoDotFill } from "react-icons/go";

const InterestsComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-2">
        <div className="pt-5 pb-4">
          <div className="text-[#c6c7c8] flex items-center justify-between px-4 ">
            <h1 className="text-white text-[18px] font-semibold">Interests</h1>
          </div>
          <div className="my-1">
            <div className="text-xs flex items-center justify-center text-white gap-1">
              <div className="px-1 py-0.5 rounded-xl outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white cursor-pointer">
                company
              </div>
              <div className="px-1 py-0.5 rounded-xl outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white cursor-pointer">
                Group
              </div>
              <div className="px-1 py-0.5 rounded-xl outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white cursor-pointer">
                Newsletter
              </div>
              <div className="px-1 py-0.5 rounded-xl outline outline-green-600 text-green-600 hover:bg-green-600 hover:text-white cursor-pointer">
                School
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InterestsComponent