import React from "react";

import Header from "../src/components/Header";
import Body from "../src/components/Body";
import SideBar from "../src/components/SideBar";
import Footer from "./components/Footer";
import Messaging from "./components/Messaging";

const App = () => {
  return (
    <>
      <div className="flex flex-col bg-black min-h-screen w-full items-center relative">
        <div className="w-3/5 2xl:w-full">
          <Header />
        </div>
        <div className="flex bg-black h-full w-full lg:w-3/5 flex-grow">
          <Body />
          <div className="hidden xl:block">
            <SideBar />
          </div>
        </div>
        <div className="fixed bottom-0 right-0 z-50 mx-4">
          <Messaging />
        </div>

        <div className="w-full 2xl:w-3/5">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
