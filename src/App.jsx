import React from "react";

import Header from "../src/components/Header";
import Body from "../src/components/Body";
import SideBar from "../src/components/SideBar";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex mx-90 my-4 gap-8">
        <Body />
        <SideBar />
      </div>
    </>
  );
};

export default App;
