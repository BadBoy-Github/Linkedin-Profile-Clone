import React from "react";

import Header from "../src/components/Header";
import Body from "../src/components/Body";
import SideBar from "../src/components/SideBar";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex bg-black h-full w-3/5 mx-auto">
        <Body />
        <SideBar />
      </div>
    </>
  );
};

export default App;
