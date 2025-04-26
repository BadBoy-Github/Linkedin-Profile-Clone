
import React from 'react'

const FeaturedIndividualComponent = ({topType, imgSrc, title, linkName, info, buttonName, buttonLink}) => {
  return (
    <>
      <div className="w-full h-[36vh] ml-4 mr-2 group relative">
        <div className="h-full w-full border border-[#38434f] rounded-xl overflow-hidden flex flex-col">
          {/* Link badge - moved outside other containers */}
          <div className="bg-[#1b1f23] border-b border-[#38434f] w-full shadow-2xl flex justify-start items-center px-3 py-1 z-20">
            <p className="text-xs text-white">{topType}</p>
          </div>

          {/* Image with zoom effect */}
          <div className="flex-1 min-h-0 overflow-hidden relative">
            <img
              src={imgSrc}
              alt="GitHub Projects"
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Text and info container */}
          <div className="relative bg-[#1b1f23] h-[60px] overflow-hidden transition-all duration-300 group-hover:h-[160px]">
            {/* Moving text */}
            <div className="px-4 pt-2 transition-transform duration-300">
              <p className="text-base font-semibold text-white">{title}</p>
              <p className="text-sm text-[#999b9d]">{linkName}</p>
            </div>

            {/* Hidden info that appears */}
            <div className="px-4 py-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100 ">
              <p className="text-sm text-[#999b9d]">{info}</p>
              <button
                className="mt-2 text-white text-sm bg-[#38434f] hover:bg-[#475569] px-3 py-1 rounded-md cursor-pointer"
                onClick={() => {
                  window.open(buttonLink, "_blank");
                }}
              >
                {buttonName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedIndividualComponent