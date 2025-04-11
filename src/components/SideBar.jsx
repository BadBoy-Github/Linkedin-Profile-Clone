
import React from 'react'

import LanguageComponent from '../Subcomponents/SidebarComponents/LanguageComponent';
import ViewedViewersComponent from '../Subcomponents/SidebarComponents/ViewedViewersComponent';

const SideBar = () => {
  return (
    <div>
      
        <LanguageComponent />
        <ViewedViewersComponent />
    </div>
  );
}

export default SideBar