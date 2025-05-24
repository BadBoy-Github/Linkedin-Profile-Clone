import React from "react";

import UrlComponent from "../Subcomponents/SidebarComponents/UrlComponent";
import LanguageComponent from "../Subcomponents/SidebarComponents/LanguageComponent";
import OrganizationComponent from "../Subcomponents/SidebarComponents/OrganizationComponent";
import InterestsComponet from "../Subcomponents/SidebarComponents/InterestsComponent";
import SkillsComponent from "../Subcomponents/SidebarComponents/SkillsComponent";
import RecommendationComponent from "../Subcomponents/SidebarComponents/RecommendationComponent";
import EducationComponent from "../Subcomponents/SidebarComponents/EducationComponent";

const SideBar = () => {
  return (
    <div className="w-70">
      <UrlComponent />
      <LanguageComponent />
      <EducationComponent />
      <SkillsComponent />
      <RecommendationComponent />
      <OrganizationComponent />
      <InterestsComponet />
    </div>
  );
};

export default SideBar;
