import React from "react";

import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-[#1b1f23] w-full h-12">
        <div className="flex items-center h-full justify-center text-white px-60">
          <div className="p-0.5 bg-[#e9e9e9] text-[#1b1f23] rounded-sm mr-3">
            <FaLinkedinIn className="text-2xl" />
          </div>
          <div className=""></div>
          Search Home My Network Jobs Messaging Notifications Me For Business
          Try Premium for free
        </div>
      </div>
    </>
  );
};

export default Header;
