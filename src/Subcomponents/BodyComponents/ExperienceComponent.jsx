import ExperienceIndividualComponent from "./ExperienceIndividualComponent";

const experience = [
  {
    imgSrc: "/img/Experience/corizo.jpg",
    name: "Corizo",
    position: "Full Stack Dev Intern",
    worktype: "Remote",
    category: "Internship",
    duration: "Nov 2024 - Dec 2024 · 1 month",
    description:
      "Completed a comprehensive full stack internship, gaining valuable coding skills!<br></br> <b>Scope of Internship:</b><br></br>1. Mastered front-end and back-end development techniques.<br></br> 2. Built dynamic web applications from scratch.<br></br>3. Learned industry best practices for coding, debugging, andtesting.<br></br> 4. Worked on real-world projects, enhancing myproblem-solving abilities.<br></br> <b>Projects Completed:</b><br></br> 1. Full stack CRUD app with create, read, update, and delete applications user management app.<br></br>2. eCommerce website with all basic features.<br></br> This internship has been an incredible journey, significantly boosting my knowledge and confidence in the field ofsoftware development. Ready to apply these skills to future projects!",
    skills: "React JS, Tailwind CSS and +7 skills",
    cSrc: "/img/Experience/corizo intern.jpg",
    cName: "Corizo Intern Certificate",
  },
  {
    imgSrc: "/img/Experience/corizo.jpg",
    name: "Corizo",
    position: "Full Stack Dev Trainee",
    worktype: "Remote",
    category: "Trainee",
    duration: "Oct 2024 - Nov 2024 · 1 month",
    description:
      "Completed an extensive full stack training program, equipping myself with essential coding skills and knowledge!<br></br> <b>Highlights of My Training:</b><br></br>1. Developed proficiency in HTML, CSS, JavaScript, MongoDB, Express.js, Bootstrap, API, Node.js, npm packages, and Cloudinary.<br></br>2. Created fully functional web applications.<br></br>3. Acquired best practices for writing clean, efficient code.<br></br> 4. Engaged in real-world projects, sharpening my technical and analytical skills.<br></br> <b>Projects Completed:</b><br></br>1. Front-end simple form.<br></br>2. Front-end shopping list app.<br></br>3. API fetch shop.<br></br>4. Bootstrap table.<br></br>5. Full stack user management app with create and read applications.<br></br> This training program has been a rewarding experience and contribute to the tech world. Let's code and create!",
    skills: "HTML5, CSS and 5+ skills",
    cSrc: "/img/Experience/corizo training.jpg",
    cName: "Corizo Training Certificate",
  },
];

const ExperienceComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 pt-7 pb-6 px-3">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Experience</h1>
        </div>
        {experience.map((item) => (
          <ExperienceIndividualComponent
            imgSrc={item.imgSrc}
            name={item.name}
            position={item.position}
            worktype={item.worktype}
            category={item.category}
            duration={item.duration}
            description={item.description}
            skills={item.skills}
            cSrc={item.cSrc}
            cName={item.cName}
          />
        ))}
      </div>
    </>
  );
};

export default ExperienceComponent;
