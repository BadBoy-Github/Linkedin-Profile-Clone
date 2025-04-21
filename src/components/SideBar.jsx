import React from "react";

import UrlComponent from "../Subcomponents/SidebarComponents/UrlComponent";
import LanguageComponent from "../Subcomponents/SidebarComponents/LanguageComponent";
import OrganizationComponent from "../Subcomponents/SidebarComponents/OrganizationComponent";
import InterestsComponet from "../Subcomponents/SidebarComponents/InterestsComponent";

const SideBar = () => {
  return (
    <div>
      <UrlComponent />
      <LanguageComponent />
      <OrganizationComponent />
      <InterestsComponet />
    </div>
  );
};

export default SideBar;
