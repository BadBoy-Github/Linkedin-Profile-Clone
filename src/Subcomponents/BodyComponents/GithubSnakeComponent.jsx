import React from "react";

import { FaGithub } from "react-icons/fa";
import GitHubSnake from "./GithubSnake";

const GithubSnakeComponent = () => {
  return (
    <div className="bg-[#1b1f23] h-[340px] w-full rounded-xl my-2 p-6">
      <div className="rounded-xl text-white text-sm w-full h-[80%] bg-[#0d1117] px-2">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-1 my-1">
            <p className="font-semibold text-[1.2rem]">GitHub Profile:</p>
            <p
              className="text-[#6eb1f3] font-semibold text-[1.2rem] hover:underline cursor-pointer"
              onClick={() => {
                window.open("https://github.com/BadBoy-Github", "_blank");
              }}
            >
              BadBoy-Github
            </p>
          </div>
          <div
            className="bg-[#1b1f23] text-white rounded-full p-0.5 flex items-center justify-center
          "
          >
            <FaGithub className="size-[1.2rem]" />
          </div>
        </div>
        <div
          className="w-full h-[90%]"
          onClick={() => {
            window.open("https://github.com/BadBoy-Github", "_blank");
          }}
        >
          <GitHubSnake />
        </div>
        <div
          className=" items-center w-full cursor-pointer "
          onClick={() => {
            window.open(
              "https://github.com/BadBoy-Github?tab=repositories",
              "_blank"
            );
          }}
        >
          <div className=" bg-[#6eb1f3]  px-2 py-2 rounded-xl flex justify-center items-center">
            <p className="text-xs text-[#1b1f23] font-bold ">36 repositories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubSnakeComponent;
