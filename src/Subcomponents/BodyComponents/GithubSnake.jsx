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
    <div className="w-full ">
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
    </div>
  );
};

export default GitHubSnake;
