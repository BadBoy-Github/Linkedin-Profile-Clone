import React from "react";

const FeaturedComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 py-7 px-3 flex flex-col gap-4">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Featured</h1>
        </div>
        <div className="flex justify-between items-center w-full h-[36vh] ">
          <div className="w-full h-full mx-4 ">
            <div className="h-full w-full border border-[#38434f] rounded-xl relative ">
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2">
                <p className="text-xs  text-white">Link</p>
              </div>
              <div className="w-fit h-fit flex justify-center items-center rounded-t-xl border-b border-[#38434f]">
                <img src="/img/DP.jpg" alt="" className="rounded-t-xl size-[16rem]" />
              </div>
              <div className="w-full h-full bg-red-400">Hi</div>
            </div>
          </div>
          <div className="w-full h-full mx-4">
            <div className="h-full w-full border border-[#38434f] rounded-xl relative">
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2">
                <p className="text-xs  text-white">Link</p>
              </div>
              <div className="flex justify-center items-center rounded-t-xl border-b border-[#38434f]">
                <img src="/img/GFG.jpg" alt="" className="rounded-t-xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-full mr-6">
            <div className="h-full w-full border border-[#38434f] rounded-xl relative">
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2">
                <p className="text-xs  text-white">Post</p>
              </div>
              <div className="flex justify-center items-center rounded-t-xl border-b border-[#38434f]">
                <img src="/img/LIUW.jpg" alt="" className="rounded-t-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedComponent;
