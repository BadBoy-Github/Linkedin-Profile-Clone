
import React, { useState } from "react";

// React Icons
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";

const EducationComponent = () => {

    const [showFullText1, setShowFullText1] = useState(false);
    const [showFullText2, setShowFullText2] = useState(false);

  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-2">
        <div className="px-4 pt-5 pb-4">
          <div className="text-[#c6c7c8] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">Education</h1>
          </div>
          <div className="mt-4 pr-1 relative">
            <div className="text-white pb-3">
              <div className="flex gap-2">
                <img
                  src="/img/KSRCT Logo.jpg"
                  alt="KSRCT Logo"
                  className="w-12 h-12 rounded-xl"
                />
                <div className="">
                  <h1 className=" font-semibold ">
                    K S Rangasamy College of Technology
                  </h1>
                  <div className="flex items-center text-[0.84rem]">
                    <p className="">B.Tech Biotechnology</p>
                  </div>
                  <p className="text-[0.84rem] text-[#8d8f91]">
                    June 2020 - May 2024
                  </p>
                  <div className="flex gap-1 items-center text-[0.84rem]">
                    <p className="">Grade: </p>
                    <p className="font-semibold">88.10 %</p>
                  </div>
                </div>
              </div>
              <div className="text-[0.84rem] text-[#8d8f91] pt-1 ">
                {showFullText1 ? (
                  <>
                    During my tenure at K.S. Rangasamy College of Technology, I
                    pursued a B.Tech in Biotechnology, an experience that
                    profoundly shaped my academic and professional journey.
                    Under the guidance of dedicated faculty, I acquired a robust
                    understanding of biotechnological principles and gained
                    practical skills through hands-on laboratory work. Engaging
                    in various extracurricular activities and cultural events
                    enriched my collegiate experience, fostering leadership and
                    interpersonal skills. My time at K.S.RCT not only equipped
                    me with a solid academic foundation but also instilled in me
                    a commitment to continuous learning and innovation in the
                    field of biotechnology.
                  </>
                ) : (
                  <>
                    During my tenure at K.S. Rangasamy College of Technology, I
                    pursued a B.Tech in Biotechnology, an experience that
                    profoundly shaped my academic and professional journey...
                  </>
                )}
                <span
                  className="text-blue-400 rounded-full cursor-pointer w-fit text-center absolute bottom-0 right-2 p-2 text-xs font-bold"
                  onClick={() => setShowFullText1(!showFullText1)}
                >
                  {showFullText1 ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pr-1 relative border-t border-[#373a3d] pt-6">
            <div className="text-white pb-3">
              <div className="flex gap-2">
                <img
                  src="/img/URC Logo.jpg"
                  alt="URC Logo"
                  className="w-12 h-12 rounded-xl"
                />
                <div className="">
                  <h1 className=" font-semibold ">
                    U R C Palaniammal Matric Hr Sec School
                  </h1>
                  <div className="flex items-center text-[0.84rem]">
                    <p className="">HSC: Bio-Math</p>
                  </div>
                  <p className="text-[0.84rem] text-[#8d8f91]">
                    June 2019 - May 2020
                  </p>
                  <div className="flex gap-1 items-center text-[0.84rem]">
                    <p className="">Grade: </p>
                    <p className="font-semibold">76.33 %</p>
                  </div>
                </div>
              </div>
              <div className="text-[0.84rem] text-[#8d8f91] pt-1 ">
                {showFullText2 ? (
                  <>
                    My education at URC Palaniammal Matric Higher Secondary
                    School was pivotal in shaping my academic foundation and
                    personal growth. Surrounded by a supportive environment, I
                    was inspired by dedicated teachers who encouraged critical
                    thinking and a holistic approach to learning. Active
                    participation in sports, cultural events, and clubs enriched
                    my experience, fostering leadership and teamwork skills.
                    This period not only strengthened my academic pursuits but
                    also instilled values of community and perseverance that
                    continue to guide my professional path.
                  </>
                ) : (
                  <>
                    My education at URC Palaniammal Matric Higher Secondary
                    School was pivotal in shaping my academic foundation and
                    personal growth...
                  </>
                )}
                <span
                  className="text-blue-400 rounded-full cursor-pointer w-fit text-center absolute bottom-0 right-2 p-2 text-xs font-bold"
                  onClick={() => setShowFullText2(!showFullText2)}
                >
                  {showFullText2 ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationComponent