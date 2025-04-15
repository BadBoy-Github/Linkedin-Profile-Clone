import React from "react";
import { useState } from "react";


const AboutComponent = () => {

  const [showFullText, setShowFullText] = useState(false);


  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 pt-7 px-3">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">About</h1>
        </div>

        <div className="text-white px-5 text-[0.94rem] pt-4 pb-12 relative">
          {showFullText ? (
            <>
              As a dedicated biotechnologist 🔍 with a robust background in
              microbiology 🧪, genetics 🧬, and plant biotechnology 🌿, I am
              passionate about leveraging biological and technological
              innovations to address real-world challenges ⚡. My academic
              foundation is complemented by extensive hands-on experience with a
              variety of laboratory methods and equipment.
              <br /> <br />
              Driven by a continuous desire for learning and professional
              growth, I am eager to acquire new skills 🧠 and explore diverse
              opportunities within the biotechnology sector. Whether it’s
              advancing research, developing innovative solutions, or
              contributing to ground-breaking projects, I am committed to making
              a meaningful impact in the field 🔬.
              <br /> <br />
              Besides, I am a tech enthusiast 💻 with a hunger for knowledge. My
              journey involves exploring technologies and algorithms that shapes
              our world 🌐. I'm fascinated by the impact of innovations.
              <br /> <br />
              Let’s connect 🤝 and explore how we can collaborate to push the
              boundaries of biotechnology! 🥳
            </>
          ) : (
            <>
              As a dedicated biotechnologist 🔍 with a robust background in
              microbiology 🧪, genetics 🧬, and plant biotechnology 🌿, I am
              passionate about leveraging biological and technological
              innovations to address real-world challenges ⚡. My academic
              foundation is complemented by extensive hands-on experience with a
              variety of laboratory methods and equipment...
            </>
          )}
          <span
            className="text-blue-400 rounded-full cursor-pointer w-fit text-center absolute bottom-2 right-2 p-2 text-sm font-bold"
            onClick={() => setShowFullText(!showFullText)}
          >
            {showFullText ? "See less ▲" : "See more ▼"}
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
