import React from "react";

import Header from "../src/components/Header";
import Body from "../src/components/Body";
import SideBar from "../src/components/SideBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex bg-black h-full w-3/5 mx-auto">
        <Body />
        <SideBar />
      </div>
      <Footer />
    </>
  );
};

export default App;
