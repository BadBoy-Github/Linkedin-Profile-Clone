import React from "react";

import { LuExternalLink } from "react-icons/lu";

const UrlComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-5">
        <div className="px-4 py-4 ">
          <div className="border-b border-[#4b4f56] pb-2">
            <div className="text-[#e9e9e9]">
              <h1 className="text-[18px] font-semibold">Profile URL</h1>
              <p className="text-[14px] pt-0.5 text-[#8d8f91]">
                www.linkedin.com/in/elayabarathi
              </p>
            </div>
          </div>
          <a
            href="https://portfolio-three-pi-52.vercel.app/"
            target="_blank"
            className="text-[18px] pt-4 flex justify-center font-bold"
          >
            <button className="bg-[#cccccc] text-[#1b1f23] hover:bg-white transition-all duration-300 active:bg-[#cccccc] w-full flex items-center justify-center rounded-lg px-4 py-1 text-base gap-2 cursor-pointer">
              <div className="text-[1.2rem]">
                <LuExternalLink />
              </div>
              Portfolio
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default UrlComponent;
