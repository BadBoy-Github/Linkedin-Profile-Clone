import React from "react";

import Header from "../src/components/Header";
import Body from "../src/components/Body";
import SideBar from "../src/components/SideBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="flex flex-col bg-black min-h-screen w-full items-center">
        <div className="w-full">
          <Header />
        </div>
        <div className="flex bg-black h-full w-full lg:w-3/5 flex-grow">
          <Body />
          <div className="hidden xl:block">
            <SideBar />
          </div>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
