
import React from 'react'

import LanguageComponent from '../Subcomponents/SidebarComponents/LanguageComponent';
import LanguagesKnownComponent from '../Subcomponents/SidebarComponents/LanguagesKnownComponent';

const SideBar = () => {
  return (
    <div>
      
        <LanguageComponent />
        <LanguagesKnownComponent />
    </div>
  );
}

export default SideBar