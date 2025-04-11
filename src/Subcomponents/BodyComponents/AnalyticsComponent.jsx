
import React from 'react'

import { IoPeople } from "react-icons/io5";

import { BsEyeFill } from "react-icons/bs";

const AnalyticsComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-1 mb-1 py-5">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Analytics</h1>
          <div className="flex gap-2 items-center text-[#a4a5a7] pt-2">
            <BsEyeFill className="size-4" />
            <p className="text-[0.8rem]">Private to you</p>
          </div>
        </div>

        <div className="flex flex-cols text-[#c6c7c8] px-5">
          <div className="">
            <div className="flex text-base items-center gap-2">
              <IoPeople className="size-5" />
              <h1 className="font-semibold">
                313 profile views
              </h1>
              <p className="text-[0.8rem]">
                Discover who's viewed your profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalyticsComponent