
import React from 'react'

import { IoPeople } from "react-icons/io5";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const HighlightComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 pt-7 px-3">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Highlights</h1>
        </div>

        <div className="flex items-center justify-between text-[#c6c7c8] px-6 pt-4 pb-5 border-b border-[#4b4f56] w-full h-fit">
          <div className="cursor-pointer">
            <div className="flex text-base items-center gap-3">
              <IoPeople className="size-5" />
              <h1 className="font-semibold">313 profile views</h1>
            </div>
            <p className="text-[0.84rem] pl-8">
              Discover who's viewed your <br />
              profile.
            </p>
          </div>
          <div className="cursor-pointer">
            <div className="flex text-base items-center gap-3">
              <RiBarChart2Fill className="size-5 border-b" />
              <h1 className="font-semibold">1053 post impressions</h1>
            </div>
            <p className="text-[0.84rem] pl-8">
              Check out who's engaging with <br />
              your posts.
            </p>
          </div>
          <div className="cursor-pointer">
            <div className="flex text-base items-center gap-3">
              <FaSearch className="size-5" />
              <h1 className="font-semibold">29 search appearences</h1>
            </div>
            <p className="text-[0.84rem] pl-8">
              See how often you appear in <br />
              search results.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-2 pb-3 mt-2 gap-2 text-[#c6c7c8] font-bold cursor-pointer">
          <p className="text-base">Show all Analysics</p>
          <FaArrowRightLong className="size-4" />
        </div>
      </div>
    </>
  );
}

export default HighlightComponent