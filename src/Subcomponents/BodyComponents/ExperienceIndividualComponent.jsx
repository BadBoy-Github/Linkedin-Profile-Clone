import { GiCutDiamond } from "react-icons/gi";

const ExperienceIndividualComponent = () => {
  return (
    <>
      <div className="text-white px-5 text-[0.94rem] pt-4 pb-12 w-full flex">
        <div className="w-1/8 p-1">
          <div className="">
            <img
              src="/img/Experience/corizo.jpg"
              alt="Corizo Logo"
              className="size-16 rounded-xl"
            />
          </div>
        </div>
        <div className="w-7/8 p-1 ml-1">
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg">Corizo</h1>
          </div>
          <div className="mt-1">
            <div className="flex gap-2 items-center">
              <h1 className="font-semibold text-base">Full Stack Dev Intern</h1>
              <p className="bg-[#38434f] px-1 py-0.5 rounded-xl text-xs ">
                Remote
              </p>
            </div>
            <p className="text-sm ">Internship</p>
            <p className="text-[#999b9d] text-xs">
              Nov 2024 - Dec 2024 · 1 month
            </p>
          </div>
          <div className="mt-2">
            Completed a comprehensive full stack internship, gaining valuable
            coding skills!<br></br>
            <br></br> <b>Scope of Internship:</b>
            <br></br>
            1. Mastered front-end and back-end development techniques.
            <br></br> 2. Built dynamic web applications from scratch.<br></br>{" "}
            3. Learned industry best practices for coding, debugging, and
            testing.<br></br> 4. Worked on real-world projects, enhancing my
            problem-solving abilities.<br></br>
            <br></br> Projects Completed:<br></br> 1. Full stack CRUD app with
            create, read, update, and delete applications user management app.
            <br></br>
            2. eCommerce website with all basic features.<br></br>
            <br></br> This internship has been an incredible journey,
            significantly boosting my knowledge and confidence in the field of
            software development. Ready to apply these skills to future
            projects!
          </div>
          <div className="mt-6 flex items-center gap-3 cursor-pointer group">
            <div className="group-hover:text-yellow-500 transition-all duration-300">
              <GiCutDiamond />
            </div>
            <p className="font-semibold group-hover:text-[#6eb1f3] group-hover:underline ">
              React JS, Tailwind CSS and +7 skills
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceIndividualComponent;
