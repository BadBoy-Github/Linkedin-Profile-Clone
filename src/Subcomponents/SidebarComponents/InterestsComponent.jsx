
import React from 'react'

import { GoDotFill } from "react-icons/go";

const InterestsComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-2">
        <div className="px-4 pt-5 pb-4">
          <div className="text-[#c6c7c8] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">Interests</h1>
          </div>
          <div className="my-1">
            <div className="text-sm flex items-center text-white px-0.5">
              <div className=" px-0.5">company</div>
              <div className=" px-0.5">Group</div>
              <div className=" px-0.5">Newsletter</div>
              <div className=" px-0.5">School</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InterestsComponent