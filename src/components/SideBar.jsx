import React from "react";

import UrlComponent from "../Subcomponents/SidebarComponents/UrlComponent";
import LanguageComponent from "../Subcomponents/SidebarComponents/LanguageComponent";
import OrganizationComponent from "../Subcomponents/SidebarComponents/OrganizationComponent";

const SideBar = () => {
  return (
    <div>
      <UrlComponent />
      <LanguageComponent />
      <OrganizationComponent />
    </div>
  );
};

export default SideBar;
