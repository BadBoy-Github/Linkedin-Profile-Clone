import React from "react";

// React Icons
import { MdEmojiEmotions } from "react-icons/md";

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
                <div className="px-4 py-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100 ">
                  <p className="text-sm text-[#999b9d]">
                    Explore my open-source projects and contributions.
                  </p>
                  <button
                    className="mt-2 text-white text-sm bg-[#38434f] hover:bg-[#475569] px-3 py-1 rounded-md cursor-pointer"
                    onClick={() => {
                      window.open("https://github.com/BadBoy-Github", "_blank");
                    }}
                  >
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
                    Dive Into My Coding Journey on GeeksforGeeks
                  </p>
                  <button
                    className="mt-2 text-white text-sm bg-[#38434f] hover:bg-[#475569] px-3 py-1 rounded-md cursor-pointer"
                    onClick={() => {
                      window.open(
                        "https://www.geeksforgeeks.org/user/elayabarathimv/",
                        "_blank"
                      );
                    }}
                  >
                    Visit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[36vh] ml-4 mr-2 group relative">
            <div className="h-full w-full border border-[#38434f] rounded-xl overflow-hidden flex flex-col">
              {/* Link badge */}
              <div className="bg-[#38434f] shadow-2xl rounded-full absolute flex justify-center items-center px-2 py-0.5 top-2 left-2 z-20">
                <p className="text-xs text-white">Post</p>
              </div>

              {/* Reaction buttons - moved to image container with higher z-index */}
              <div className="absolute top-2 right-0 z-20 flex items-center space-x-2 px-2 ">
                <div className="bg-[#38434f] shadow-2xl rounded-full flex justify-center items-center px-1 py-0.5 gap-1">
                  <div className="w-fit h-fit text-sky-400 ">
                    <MdEmojiEmotions className="size-[1.3rem] bg-black rounded-full p-0.5" />
                  </div>
                  <div className="w-5 h-5 p-1 rounded-full bg-black flex items-center justify-center">
                    <p className="text-[0.5rem] text-white">22</p>
                  </div>
                </div>
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
                    LinkedIn Unwrapped
                  </p>
                  <p className="text-sm text-[#999b9d]">
                    www.cleve.ai/unwrapped
                  </p>
                </div>

                {/* Hidden info that appears */}
                <div className="px-4 py-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                  <p className="text-sm text-[#999b9d]">
                    LinkedIn Reflecting on an Incredible 2024!
                  </p>
                  <button className="mt-2 text-white text-sm bg-[#38434f] hover:bg-[#475569] px-3 py-1 rounded-md cursor-pointer">
                    View Post
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
