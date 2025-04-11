import React from "react";

import ProfileComponent from "../Subcomponents/BodyComponents/ProfileComponent";
import AnalyticsComponent from "../Subcomponents/BodyComponents/AnalyticsComponent";
import AboutComponent from "../Subcomponents/BodyComponents/AboutComponent";

const Body = () => {
  return (
    <div>
      
          <ProfileComponent />
          <AnalyticsComponent />
          <AboutComponent />

    </div>
  );
};

export default Body;
