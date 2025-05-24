import React, { useState } from "react";


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
              As a dedicated <b>biotechnologist</b> 🧪 with a strong foundation
              in <b>microbiology, genetics, and plant biotechnology</b> 🌿, I
              thrive at the intersection of <b>science and technology</b>. My
              expertise spans advanced laboratory techniques, data analysis, and
              innovative research methodologies, allowing me to tackle
              real-world biological challenges with precision ⚡.
              <br /> <br />
              Beyond the lab, I am a <b>tech enthusiast</b> with a passion for
              <b> frontend web development</b>. I craft clean, responsive, and
              user-friendly websites using modern technologies like{" "}
              <b>HTML, CSS, JavaScript, React and Tailwind CSS</b>. My ability
              to merge <b>analytical thinking</b>
              (from biotech) with <b>creative problem-solving</b> (from coding)
              enables me to build intuitive digital experiences.
              <br /> <br />
              Driven by continuous learning 🧠, I am always expanding my skill
              set—whether in <b>biotech research</b> or <b>web development</b>.
              I’m excited about opportunities where science and technology
              converge, from bioinformatics to science communication through
              interactive web platforms.
              <br /> <br />
              Let’s connect 🤝 and explore how we can collaborate—whether in
              <b>
                {" "}
                biotech innovation, scientific web solutions, or cutting-edge
                research!
              </b>{" "}
              🚀
            </>
          ) : (
            <>
              As a dedicated <b>biotechnologist</b> 🧪 with a strong foundation
              in <b>microbiology, genetics, and plant biotechnology</b> 🌿, I
              thrive at the intersection of <b>science and technology</b>. My
              expertise spans advanced laboratory techniques, data analysis, and
              innovative research methodologies, allowing me to tackle
              real-world biological challenges with precision ⚡...
            </>
          )}
          <span
            className="text-[#999b9d] hover:text-[#6eb1f3] rounded-full cursor-pointer w-fit text-center absolute bottom-2 right-2 p-2 text-sm"
            onClick={() => setShowFullText(!showFullText)}
          >
            {showFullText ? "see less" : "see more"}
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
