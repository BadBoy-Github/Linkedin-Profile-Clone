import React from "react";

// React Icons
import { AiFillLike } from "react-icons/ai";
import { FaHandsClapping } from "react-icons/fa6";

const FeaturedComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 py-7 px-3 flex flex-col gap-4">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Featured</h1>
        </div>
        <div className="flex justify-between items-center w-full h-[36vh]">
          <div className="w-full h-[36vh] ml-4 mr-2 group relative">
            <div className="h-full w-full border border-[#38434f] rounded-xl overflow-hidden flex flex-col">
              {/* Link badge - moved outside other containers */}
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2 z-20">
                <p className="text-xs text-white">Link</p>
              </div>

              {/* Image with zoom effect */}
              <div className="flex-1 min-h-0 overflow-hidden relative">
                <img
                  src="/img/DP.jpg"
                  alt="GitHub Projects"
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text and info container */}
              <div className="relative bg-[#1b1f23] h-[60px] overflow-hidden transition-all duration-300 group-hover:h-[160px]">
                {/* Moving text */}
                <div className="px-4 pt-2 transition-transform duration-300">
                  <p className="text-base font-semibold text-white">
                    GitHub Profile
                  </p>
                  <p className="text-sm text-[#999b9d]">www.github.com</p>
                </div>

                {/* Hidden info that appears */}
                <div className="px-4 py-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                  <p className="text-sm text-[#999b9d]">
                    Explore my open-source projects and contributions.
                  </p>
                  <button className="mt-2 text-white text-sm bg-[#38434f] hover:bg-[#475569] px-3 py-1 rounded-md">
                    Visit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[36vh] ml-4 mr-2 group relative">
            <div className="h-full w-full border border-[#38434f] rounded-xl overflow-hidden flex flex-col">
              {/* Link badge - moved outside other containers */}
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2 z-20">
                <p className="text-xs text-white">Link</p>
              </div>

              {/* Image with zoom effect */}
              <div className="flex-1 min-h-0 overflow-hidden relative">
                <img
                  src="/img/GFG.jpg"
                  alt="GeeksforGeeks Projects"
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text and info container */}
              <div className="relative bg-[#1b1f23] h-[60px] overflow-hidden transition-all duration-300 group-hover:h-[160px]">
                {/* Moving text */}
                <div className="px-4 pt-2 transition-transform duration-300">
                  <p className="text-base font-semibold text-white">
                    GeeksforGeeks Profile
                  </p>
                  <p className="text-sm text-[#999b9d]">
                    www.geeksforgeeks.org
                  </p>
                </div>

                {/* Hidden info that appears */}
                <div className="px-4 py-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                  <p className="text-sm text-[#999b9d]">
                    Explore my open-source projects and contributions.
                  </p>
                  <button className="mt-2 text-white text-sm bg-[#38434f] hover:bg-[#475569] px-3 py-1 rounded-md">
                    Visit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[36vh] ml-4 mr-2 group relative">
            <div className="h-full w-full border border-[#38434f] rounded-xl overflow-hidden flex flex-col">
              {/* Link badge - moved outside other containers */}
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2 z-20">
                <p className="text-xs text-white">Link</p>
              </div>

              {/* Image with zoom effect */}
              <div className="flex-1 min-h-0 overflow-hidden relative">
                <img
                  src="/img/LIUW.jpg"
                  alt="Linkedin 2024 Unwrapped"
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text and info container */}
              <div className="relative bg-[#1b1f23] h-[60px] overflow-hidden transition-all duration-300 group-hover:h-[160px]">
                {/* Moving text */}
                <div className="px-4 pt-2 transition-transform duration-300">
                  <p className="text-base font-semibold text-white">
                    LinkedIn 2024 Unwrapped
                  </p>
                  <div className="w-full py- relative flex items-center justify-center">
                    <div className="absolute bottom-2 left-0 w-fit h-fit text-sky-400 rounded-full bg-black">
                      <AiFillLike className="size-[1.2rem] p-1" />
                    </div>
                    <div className="absolute bottom-2 left-6 w-fit h-fit text-green-500 rounded-full bg-black">
                      <FaHandsClapping className="size-[1.2rem] p-1" />
                    </div>
                    <div className="absolute bottom-2 left-12 w-5 h-5 p-1 rounded-full bg-black flex items-center justify-center">
                      <p className="text-[0.5rem] text-white">33</p>
                    </div>
                  </div>
                </div>

                {/* Hidden info that appears */}
                <div className="px-4 py-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                  <p className="text-sm text-[#999b9d]">
                    Explore my open-source projects and contributions.
                  </p>
                  <button className="mt-2 text-white text-sm bg-[#38434f] hover:bg-[#475569] px-3 py-1 rounded-md">
                    Visit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedComponent;
