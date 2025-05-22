import ExperienceIndividualComponent from "./ExperienceIndividualComponent";

const experience = [
  {
    name: "Corizo",
    position: "Full Stack Dev Intern",
    worktype: "Remote",
    category: "Internship",
    duration: "Nov 2024 - Dec 2024 · 1 month",
    description:
      "Completed a comprehensive full stack internship, gaining valuable coding skills!<br></br><br></br> <b>Scope of Internship:</b><br></br>1. Mastered front-end and back-end development techniques.<br></br> 2. Built dynamic web applications from scratch.<br></br>3. Learned industry best practices for coding, debugging, andtesting.<br></br> 4. Worked on real-world projects, enhancing myproblem-solving abilities.<br></br><br></br> Projects Completed:<br></br> 1. Full stack CRUD app with create, read, update, and delete applications user management app.<br></br>2. eCommerce website with all basic features.<br></br><br></br> This internship has been an incredible journey, significantly boosting my knowledge and confidence in the field ofsoftware development. Ready to apply these skills to future projects!",
    skills: "React JS, Tailwind CSS and +7 skills",
  },
];

const ExperienceComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 pt-7 px-3">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Experience</h1>
        </div>
        <ExperienceIndividualComponent />
      </div>
    </>
  );
};

export default ExperienceComponent;
