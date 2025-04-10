
import React from 'react'

import { MdOutlineModeEditOutline } from "react-icons/md";

const Body = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-full w-4/5 rounded-xl mr-2 my-5">
        <div className="pb-10 rounded-t-xl h-80 w-full relative" id="pics">
          <img
            src="../../public/img/LinkedIn Banner.png"
            alt="linkedin banner"
            className="w-full rounded-t-xl"
          />
          <div className="absolute text-blue-600 bg-white rounded-full p-1 size-7 flex items-center justify-center top-5 right-5">
            <MdOutlineModeEditOutline />
          </div>
          <img
            src="../../public/img/LinkedIn Profile.jpg"
            alt="linkedin profile"
            className="absolute size-39 rounded-full top-23 left-9 border-[4px] border-[#1b1f23]"
          />
          <img src="../../public/img/LinkedIn OTW.png" alt="OTW" className='absolute size-[149px] top-24 left-10'/>
        </div>
      </div>
    </>
  );
}

export default Body