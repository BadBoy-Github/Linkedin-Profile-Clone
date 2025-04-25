import React from "react";

const FeaturedComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 py-7 px-3 flex flex-col gap-4">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Featured</h1>
        </div>
        <div className="flex justify-between items-center w-full h-[36vh]">
          <div className="w-full h-[36vh] mx-4">
            <div className="h-full w-full border border-[#38434f] rounded-xl relative overflow-hidden flex flex-col">
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2 z-10">
                <p className="text-xs text-white">Link</p>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <img
                  src="/img/DP.jpg"
                  alt="GitHub Projects"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full p-2">
                <p className="text-base font-semibold text-white">
                  Explore My Code & Projects on GitHub
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[36vh] mx-4">
            <div className="h-full w-full border border-[#38434f] rounded-xl relative overflow-hidden flex flex-col">
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2 z-10">
                <p className="text-xs text-white">Link</p>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <img
                  src="/img/GFG.jpg"
                  alt="GFG Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full p-2">
                <p className="text-base font-semibold text-white">
                  Dive Into My Coding Joumey on GeeksforGæks
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[36vh] mx-4">
            <div className="h-full w-full border border-[#38434f] rounded-xl relative overflow-hidden flex flex-col">
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2 z-10">
                <p className="text-xs text-white">Link</p>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <img
                  src="/img/LIUW.jpg"
                  alt="LinkedIn Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full p-2">
                <p className="text-base font-semibold text-white">
                  LinkedIn 2024 Unwrapper
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedComponent;
