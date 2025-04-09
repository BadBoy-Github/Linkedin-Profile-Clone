
import React from 'react'

const SideBar = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-full w-1/4 rounded-xl ml-2 mr-80 my-5">
        <div className="px-4 py-4" id="top1">
          <div className="border-b-2 border-black pb-4" id="pl">
            <div className="text-[#e9e9e9]">
              <h1 className="text-lg font-bold">Profile language</h1>
              <p className="text-sm pt-0.5">English</p>
            </div>
          </div>

          <div className="pt-4" id="ppu">
            <div className="text-[#e9e9e9]">
              <h1 className="text-lg font-bold">Public Profile & URL</h1>
              <p className="text-sm pt-0.5">www.linkedin.com/in/elayabarathi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar