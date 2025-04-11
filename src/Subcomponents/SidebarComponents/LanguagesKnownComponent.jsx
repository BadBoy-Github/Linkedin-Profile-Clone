
import React from 'react'

import { FaPlus } from "react-icons/fa6";
import { MdOutlineModeEditOutline } from "react-icons/md";

const LanguagesKnownComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-2 mt-5">
        <div className="px-4 py-4">
          <div className="text-[#9b9d9f] flex items-center justify-between relative">
            <h1 className="text-white text-[18px] font-semibold">Languages</h1>
            <div className="flex items-center gap-3">
              <FaPlus className='size-4'/>
              <MdOutlineModeEditOutline className='size-4'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LanguagesKnownComponent