import React, { useState } from "react";
import {
  CompanyComponent,
  GroupComponent,
  NewsletterComponent,
  SchoolComponent,
} from "./InterestContentComponent";

const InterestsComponent = () => {
  const [selectedInterest, setSelectedInterest] = useState("company");

  const renderSelectedComponent = () => {
    switch (selectedInterest) {
      case "company":
        return <CompanyComponent />;
      case "group":
        return <GroupComponent />;
      case "newsletter":
        return <NewsletterComponent />;
      case "school":
        return <SchoolComponent />;
      default:
        return <CompanyComponent />;
    }
  };

  return (
    <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-2 mb-2">
      <div className="pt-5 pb-4">
        <div className="text-[#c6c7c8] flex items-center justify-between px-4">
          <h1 className="text-white text-[18px] font-semibold">Interests</h1>
        </div>
        <div className="my-1">
          <div className="text-xs flex items-center justify-center text-white gap-1 pb-2">
            <button
              className={`px-1 py-0.5 border-b-2 cursor-pointer ${
                selectedInterest === "company"
                  ? "border-[#6eb1f3] text-[#6eb1f3]"
                  : "border-transparent text-[#6eb1f3]"
              }`}
              onClick={() => setSelectedInterest("company")}
            >
              Company
            </button>
            <button
              className={`px-1 py-0.5 border-b-2 cursor-pointer ${
                selectedInterest === "group"
                  ? "border-[#6eb1f3] text-[#6eb1f3]"
                  : "border-transparent text-[#6eb1f3]"
              }`}
              onClick={() => setSelectedInterest("group")}
            >
              Group
            </button>
            <button
              className={`px-1 py-0.5 border-b-2 cursor-pointer ${
                selectedInterest === "newsletter"
                  ? "border-[#6eb1f3] text-[#6eb1f3]"
                  : "border-transparent text-[#6eb1f3]"
              }`}
              onClick={() => setSelectedInterest("newsletter")}
            >
              Newsletter
            </button>
            <button
              className={`px-1 py-0.5 border-b-2 cursor-pointer ${
                selectedInterest === "school"
                  ? "border-[#6eb1f3] text-[#6eb1f3]"
                  : "border-transparent text-[#6eb1f3]"
              }`}
              onClick={() => setSelectedInterest("school")}
            >
              School
            </button>
          </div>
          {renderSelectedComponent()}
        </div>
      </div>
    </div>
  );
};

export default InterestsComponent;
