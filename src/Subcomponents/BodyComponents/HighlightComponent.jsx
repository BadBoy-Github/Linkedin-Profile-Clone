import React from "react";

import { BiSolidSend } from "react-icons/bi";

const HighlightComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] w-full rounded-xl mr-2 mt-2 mb-2 pt-7 pb-1 px-3 h-fit">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Highlights</h1>
        </div>

        <div className="bg-[#38434f] py-2 px-3 mr-4 ml-2 rounded-xl text-white text-sm mt-4 mb-6 h-[6rem] relative flex items-center">
          <div className="size-[4.6rem] flex items-center justify-center mr-2">
            <img
              src="/public/img/Panda Productions Logo.png"
              alt="panda logo"
              className="rounded-xl"
            />
          </div>
          <div className=" flex flex-col justify-center w-[70%]">
            <p className="font-semibold text-[0.96rem]">
              Both worked at Panda Productions
            </p>
            <p className="pt-1">
              You both are the <b>Founder & CEO</b> of <b>Panda Productions</b>
            </p>
            <button className="absolute bg-[#6eb1f3] hover:bg-[#4aa1f8] active:bg-[#6eb1f3] transition-all duration-300 text-[#38434f] rounded-full p-1 text-base font-semibold flex items-center cursor-pointer top-2 right-2 hover:rotate-[-45deg]">
              <BiSolidSend className="size-[100%]" />
            </button>
          </div>
        </div>

        <div className="bg-[#38434f] py-2 px-3 mr-4 ml-2 rounded-xl text-white text-sm mt-4 mb-6 h-[6rem] relative flex items-center">
          <div className="size-[4.6rem] flex items-center justify-center mr-2">
            <img
              src="/public/img/KSRCT Logo.jpeg"
              alt="ksr logo"
              className="rounded-xl"
            />
          </div>
          <div className=" flex flex-col justify-center w-[70%]">
            <p className="font-semibold text-[0.96rem]">
              Both studied at K.S.Rangasamy College of Technology
            </p>
            <p className="pt-1">
              You both studied at <b>K.S.Rangasamy College of Technology</b>{" "}
              from 2020 to 2023
            </p>
            <button className="absolute bg-[#6eb1f3] hover:bg-[#4aa1f8] active:bg-[#6eb1f3] transition-all duration-300 text-[#38434f] rounded-full p-1 text-base font-semibold flex items-center cursor-pointer top-2 right-2 hover:rotate-[-45deg]">
              <BiSolidSend className="size-[100%]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightComponent;
