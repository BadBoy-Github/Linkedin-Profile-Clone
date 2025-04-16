import React from "react";

import ProfileComponent from "../Subcomponents/BodyComponents/ProfileComponent";
import HighlightComponent from "../Subcomponents/BodyComponents/HighlightComponent";
import AboutComponent from "../Subcomponents/BodyComponents/AboutComponent";

const Body = () => {
  return (
    <div>
      <ProfileComponent />
      <HighlightComponent />
      <AboutComponent />
    </div>
  );
};

export default Body;
