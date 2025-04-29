import React from "react";

// React Icons
import { MdEmojiEmotions } from "react-icons/md";
import FeaturedIndividualComponent from "./FeaturedIndividualComponent";

const FeaturedComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 py-7 px-3 flex flex-col gap-4">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Featured</h1>
        </div>

        <div className="flex justify-between items-center w-full h-[36vh]">
          <FeaturedIndividualComponent
            topType="Link"
            imgSrc="/img/Portfolio.jpg"
            title="Elayabarathi M V | Portfolio"
            linkName="www.elayabarathimv.com"
            info="My personal portfolio showcasing projects and my technical expertise."
            buttonName="Visit Portfolio"
            buttonIcon=""
            buttonLink="https://portfolio-three-pi-52.vercel.app/"
          />

          <FeaturedIndividualComponent
            topType="Link"
            imgSrc="/img/Github Profile.jpg"
            title="GitHub Profile"
            linkName="www.github.com"
            info="Check out my GitHub profile to dive into my coding journey and projects!"
            buttonName="Visit Profile"
            buttonIcon=""
            buttonLink="https://github.com/BadBoy-Github"
          />

          <FeaturedIndividualComponent
            topType="Post"
            imgSrc="/img/LIUW.jpg"
            title="LinkedIn Unwrapped"
            linkName="www.cleve.ai/unwrapped"
            info="Reflecting on an Incredible LinkedIn 2024 Journey!"
            buttonName="View Post"
            buttonIcon=""
            buttonLink="#"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedComponent;
