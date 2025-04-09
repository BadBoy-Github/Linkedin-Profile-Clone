
import React from 'react'

const Body = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-full w-3/4 rounded-xl ml-80 mr-2 my-5">
        <div className="pb-10 rounded-t-xl h-80 w-full relative" id="pics">
          <img
            src="../../public/img/LinkedIn Banner.png"
            alt="linkedin banner"
            className="h-40px w-50px overflow-hidden rounded-t-xl"
          />
          <img
            src="../../public/img/LinkedIn Profile.jpg"
            alt="linkedin profile"
            className="absolute size-40 rounded-full top-30 left-10 duration-2000 border-3 border-[#1b1f23]"
          />
        </div>
      </div>
    </>
  );
}

export default Body