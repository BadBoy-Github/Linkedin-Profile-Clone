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
            imgSrc="/img/DP.jpg"
            title="GitHub Profile"
            linkName="www.github.com"
            info="Explore my open-source projects."
            buttonName="Visit Profile"
            buttonLink="https://github.com/BadBoy-Github"
          />

          <FeaturedIndividualComponent
            topType="Link"
            imgSrc="/img/GFG.jpg"
            title="GeeksforGeeks Profile"
            linkName="www.geeksforgeeks.org"
            info="Dive Into My Coding Journey."
            buttonName="Visit Profile"
            buttonLink="https://www.geeksforgeeks.org/user/elayabarathimv/"
          />

          <FeaturedIndividualComponent
            topType="Post"
            imgSrc="/img/LIUW.jpg"
            title="LinkedIn Unwrapped"
            linkName="www.cleve.ai/unwrapped"
            info="Reflecting on an Incredible 2024!"
            buttonName="View Post"
            buttonLink="#"
          />

        </div>
      </div>
    </>
  );
};

export default FeaturedComponent;
