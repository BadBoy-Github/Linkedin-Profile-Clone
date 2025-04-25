import React from "react";

const FeaturedComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 py-7 px-3 flex flex-col gap-4">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Featured</h1>
        </div>
        <div className="flex justify-between items-center w-full h-90">
          <div className="w-full bg-green-400 h-full ml-6"></div>
          <div className="w-full bg-green-400 h-full mx-3"></div>
          <div className="w-full bg-green-400 h-full mr-6"></div>
        </div>
      </div>
    </>
  );
};

export default FeaturedComponent;
