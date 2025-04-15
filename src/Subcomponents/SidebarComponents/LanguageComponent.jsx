
import React from 'react'


const LanguageComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-4">
        <div className="px-4 pt-5 pb-4">
          <div className="text-[#c6c7c8] flex items-center justify-between">
            <h1 className="text-white text-[18px] font-semibold">
              Linguistic abilities
            </h1>
          </div>
          <div className="mt-4">
            <div className="border-b border-[#373a3d] text-white pb-3">
              <h1 className=" font-semibold ">English</h1>
              <p className="text-[0.84rem] text-[#8d8f91]">
                Professional working proficiency
              </p>
            </div>
            <div className=" text-white">
              <h1 className=" font-semibold mt-3">Tamil</h1>
              <p className="text-[0.84rem] text-[#8d8f91]">
                Native or bilingual proficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LanguageComponent;