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
    skills: [
      "React JS", "Tailwind CSS", "Express JS", "MongoDB", "GitHub", "Vercel", "VS Code", "Cloudinary", "Stripe (Software)",
    ],
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
    skills: ["HTML5", "CSS3", "JavaScript", "API", "Bootstrap", "Node JS", "MongoDB"],
    cSrc: "/img/Experience/corizo training.jpg",
    cName: "Corizo Training Certificate",
  },
  {
    imgSrc: "/img/Experience/elies.jpg",
    name: "Elies Biotech Pvt. Ltd",
    position: "Applied Microbiology and Agricultural Biotechnology",
    worktype: "Onsite · Erode, Tamil Nadu, India",
    category: "Internship",
    duration: "Jul 2022 - Aug 2022 · 1 month",
    description:
      "Completed a hands-on internship acquiring entrepreneurial skills and technical expertise in applied microbiology, rated excellent!<br></br> <b>Scope of Intern:</b><br></br><b>1. Microbial Characterization:</b> Isolated and characterized agriculturally important microorganisms.<br></br><b>2. Biofertilizers:</b> Developed commercial production techniques for biofertilizers.<br></br><b>3. Mushroom Tissue Culture:</b> Mastered advanced mushroom tissue culture methods.<br></br><b>4. Black Soldier Fly Larvae:</b> Gained expertise in rearing Black Soldier Fly Larvae for sustainable feed supplements.<br></br> This internship provided practical experience and a strong foundation in agricultural and environmental biotechnology!",
    skills: ["BSFL rearing", "Microbiology", "Mushroom cultivation"],
    cSrc: "/img/Experience/elies intern.jpg",
    cName: "Elies Biotech Internship Certificate",
  },
  {
    imgSrc: "/img/Experience/sample.jpg",
    name: "Biorith Techno Products Pvt. Ltd",
    position: "Biorith Millet Products",
    worktype: "Onsite · Virudhunagar, Tamil Nadu, India",
    category: "Internship",
    duration: "Jun 2022 - Jul 2022 · 1 month",
    description:
      "During my internship at an Automatic Millet Processing Unit, I learned to operate advanced machinery for millet processing and helped develop eco-friendly packaging solutions, contributing to sustainable food production.<br></br> <b>Scope of Intern:</b><br></br>1. This internship provided me with invaluable hands-on experience in sustainable agriculture and food processing.<br></br>2. Working alongside industry experts, I gained insights into the integration of advanced technology with environmental stewardship in the food industry. It allowed me to apply theoretical knowledge to practical tasks and contributed to my professional growth in this dynamic field.<br></br> My time at the Automatic Millet Processing Unit was transformative, equipping me with practical skills and a deeper understanding of sustainable food technology. I recommend this opportunity to those passionate about impactful contributions in agriculture and food processing.!",
    skills: ["Food Science", "Sustainable Agriculture", "Quality Assurance", "Food Processing"],
    cSrc: "/img/Experience/biorith intern.jpg",
    cName: "Biorith Internship Certificate",
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
