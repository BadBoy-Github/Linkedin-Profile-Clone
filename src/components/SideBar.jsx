import React from "react";

import UrlComponent from "../Subcomponents/SidebarComponents/UrlComponent";
import LanguageComponent from "../Subcomponents/SidebarComponents/LanguageComponent";
import OrganizationComponent from "../Subcomponents/SidebarComponents/OrganizationComponent";
import InterestsComponet from "../Subcomponents/SidebarComponents/InterestsComponent";
import SkillsComponent from "../Subcomponents/SidebarComponents/SkillsComponent";

const SideBar = () => {
  return (
    <div>
      <UrlComponent />
      <LanguageComponent />
      <OrganizationComponent />
      <SkillsComponent />
      <InterestsComponet />
    </div>
  );
};

export default SideBar;
