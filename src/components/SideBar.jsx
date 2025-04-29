import React from "react";

import UrlComponent from "../Subcomponents/SidebarComponents/UrlComponent";
import LanguageComponent from "../Subcomponents/SidebarComponents/LanguageComponent";
import OrganizationComponent from "../Subcomponents/SidebarComponents/OrganizationComponent";
import InterestsComponet from "../Subcomponents/SidebarComponents/InterestsComponent";
import SkillsComponent from "../Subcomponents/SidebarComponents/SkillsComponent";
import RecommendationComponent from "../Subcomponents/SidebarComponents/RecommendationCOmponent";

const SideBar = () => {
  return (
    <div className="w-70">
      <UrlComponent />
      <LanguageComponent />
      <RecommendationComponent />
      <OrganizationComponent />
      <SkillsComponent />
      <InterestsComponet />
    </div>
  );
};

export default SideBar;
