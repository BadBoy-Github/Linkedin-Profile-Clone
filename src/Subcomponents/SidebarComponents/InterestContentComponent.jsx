import React from "react";

import { IoMdAdd } from "react-icons/io";

export const CompanyComponent = () => (
  <div className="mt-3 px-4 text-white">
    <div className="flex">
      <div className="mr-1">
        <img
          src="/public/img/IBM.png"
          alt=""
          className="size-[3rem] px-2 py-3 bg-white rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center ml-1">
        <p className="text-base font-semibold text-white">IBM</p>
        <p className="text-xs text-gray-400">18,132,440 followers</p>
      </div>
      <div className="flex items-center ml-auto">
        <button className="text-sm bg-[#6eb1f3] text-[#1b1f23] p-1 rounded-full hover:rotate-90 hover:bg-[#4aa1f8] transition-all duration-400">
          <IoMdAdd className="size-4" />
        </button>
      </div>
    </div>
  </div>
);

export const GroupComponent = () => (
  <div className="mt-3 px-4 text-white">
    <h3 className="font-medium">Group Content</h3>
    <p className="text-sm text-gray-400">This is the group-related content.</p>
  </div>
);

export const NewsletterComponent = () => (
  <div className="mt-3 px-4 text-white">
    <h3 className="font-medium">Newsletter Content</h3>
    <p className="text-sm text-gray-400">
      This is the newsletter-related content.
    </p>
  </div>
);

export const SchoolComponent = () => (
  <div className="mt-3 px-4 text-white">
    <h3 className="font-medium">School Content</h3>
    <p className="text-sm text-gray-400">This is the school-related content.</p>
  </div>
);
