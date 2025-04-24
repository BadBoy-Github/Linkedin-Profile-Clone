import React, { useState, useEffect } from "react";

const GitHubSnake = ({ username = "BadBoy-Github" }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [snakeSrc, setSnakeSrc] = useState("");

  useEffect(() => {
    // Check for dark mode preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    const handler = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // Set the appropriate snake image based on dark mode
    setSnakeSrc(
      darkMode
        ? `https://raw.githubusercontent.com/${username}/${username}/output/github-snake-dark.svg`
        : `https://raw.githubusercontent.com/${username}/${username}/output/github-snake.svg`
    );
  }, [darkMode, username]);

  return (
    <div
      className="github-snake-container"
      style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}
    >
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcSet={`https://raw.githubusercontent.com/${username}/${username}/output/github-snake-dark.svg`}
        />
        <source
          media="(prefers-color-scheme: light)"
          srcSet={`https://raw.githubusercontent.com/${username}/${username}/output/github-snake.svg`}
        />
        <img
          src={`https://raw.githubusercontent.com/${username}/${username}/output/github-snake.svg`}
          alt="GitHub contribution snake"
          style={{ width: "100%", height: "auto" }}
          onError={(e) => {
            // Fallback if images fail to load
            e.target.onerror = null;
            e.target.src = `https://raw.githubusercontent.com/Platane/snk/output/github-contribution-grid-snake.svg`;
          }}
        />
      </picture>

      <div className=" mt-2 flex justify-between items-center">
        <div className=" bg-green-500  px-2 py-1 rounded-full flex justify-center items-center ">
          <p className="text-xs text-[#1b1f23] font-bold">33 repos</p>
        </div>
        <p className="text-xs text-green-500">@BadBoy-Github</p>
      </div>
    </div>
  );
};

export default GitHubSnake;
