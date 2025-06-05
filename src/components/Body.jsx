import React from "react";

import ProfileComponent from "../Subcomponents/BodyComponents/ProfileComponent";
import HighlightComponent from "../Subcomponents/BodyComponents/HighlightComponent";
import AboutComponent from "../Subcomponents/BodyComponents/AboutComponent";
import FeaturedComponent from "../Subcomponents/BodyComponents/FeaturedComponent";
import ExperienceComponent from "../Subcomponents/BodyComponents/ExperienceComponent";
import GithubSnakeComponent from "../Subcomponents/BodyComponents/GithubSnakeComponent";

const Body = () => {
  return (
    <div className="w-212">
      <ProfileComponent />
      <GithubSnakeComponent />
      <HighlightComponent />
      <AboutComponent />
      <FeaturedComponent />
      <ExperienceComponent />
    </div>
  );
};

export default Body;
