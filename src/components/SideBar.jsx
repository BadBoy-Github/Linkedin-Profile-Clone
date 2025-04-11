
import React from 'react'

import LanguageComponent from '../Subcomponents/SidebarComponents/LanguageComponent';
import LanguagesKnownComponent from '../Subcomponents/SidebarComponents/LanguagesKnownComponent';
import OrganizationComponent from '../Subcomponents/SidebarComponents/OrganizationComponent';

const SideBar = () => {
  return (
    <div>
      
        <LanguageComponent />
        <LanguagesKnownComponent />
        <OrganizationComponent />
    </div>
  );
}

export default SideBar