
import React from 'react'

import { IoPeople } from "react-icons/io5";
import { BsEyeFill } from "react-icons/bs";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const AnalyticsComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-1 mb-1 pt-5 px-3">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Analytics</h1>
          <div className="flex gap-2 items-center text-[#a4a5a7]">
            <BsEyeFill className="size-4" />
            <p className="text-[0.8rem]">Private to you</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[#c6c7c8] px-5 py-4 border-b border-[#4b4f56] w-full h-fit">
          <div className="">
            <div className="flex text-base items-center gap-3">
              <IoPeople className="size-5" />
              <h1 className="font-semibold">313 profile views</h1>
            </div>
            <p className="text-[0.84rem] pl-8">
              Discover who's viewed your <br />
              profile.
            </p>
          </div>
          <div className="">
            <div className="flex text-base items-center gap-3">
              <RiBarChart2Fill className="size-5 border-b" />
              <h1 className="font-semibold">1037 post impressions</h1>
            </div>
            <p className="text-[0.84rem] pl-8">
              Check out who's engaging with <br />
              your posts.
            </p>
          </div>
          <div className="">
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
        <div className="flex items-center justify-center py-2 mt-2 text-[#c6c7c8]">
          <p>Show all Analysics</p>
          <FaLongArrowAltRight />
        </div>
      </div>
    </>
  );
}

export default AnalyticsComponent