import React from "react";

import ProfileComponent from "../Subcomponents/BodyComponents/ProfileComponent";
import HighlightComponent from "../Subcomponents/BodyComponents/HighlightComponent";
import AboutComponent from "../Subcomponents/BodyComponents/AboutComponent";
import FeaturedComponent from "../Subcomponents/BodyComponents/FeaturedComponent";

const Body = () => {
  return (
    <div>
      <ProfileComponent />
      <HighlightComponent />
      <AboutComponent />
      <FeaturedComponent />
    </div>
  );
};

export default Body;
