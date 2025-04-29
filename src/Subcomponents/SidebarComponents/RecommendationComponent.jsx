
import React from 'react'

const RecommendationComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-2">
        <div className="px-4 pt-5 pb-4">
          <div className="text-[#c6c7c8] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">
              Recommendations
            </h1>
          </div>
          <div className="mt-4 pr-1">
            <div className="text-white pb-3">
              <h1 className=" font-semibold ">Hero</h1>
              <div className="flex items-center text-[0.84rem] pt-1">
                <p className="">Biotechnologist | Medical Coder</p>
              </div>
              <p className="text-[0.8rem] text-[#8d8f91] pt-1">
                It’s rare to come across someone as intellectually curious and
                driven as Elayabarathi M V. With a strong foundation in both
                biotechnology and computer science, he bridges the gap between
                biology and tech effortlessly. His relentless curiosity—always
                asking what, why, when, and how—fuels his ability to learn and
                innovate at an impressive pace.<br></br>
                <br></br> I had the privilege of collaborating with him on an
                anti-cancer research project, where his analytical mindset and
                problem-solving skills were invaluable. Beyond that, his solo
                work in frontend development speaks for itself—he builds
                stunning, user-friendly websites with a keen eye for detail and
                functionality.<br></br>
                <br></br> What sets him apart is his passion for understanding
                systems deeply and his eagerness to take on new challenges.
                Whether in the lab or behind a screen, he thrives on turning
                ideas into reality. Any team would be lucky to have him, and I
                have no doubt he’ll achieve great things ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendationComponent;