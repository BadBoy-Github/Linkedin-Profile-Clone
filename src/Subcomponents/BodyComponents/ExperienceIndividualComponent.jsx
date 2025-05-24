import { GiCutDiamond } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { useState } from "react";


const ExperienceIndividualComponent = ({
  imgSrc,
  name,
  position,
  worktype,
  category,
  duration,
  description,
  skills,
  cSrc,
  cName,
  cDescription,
}) => {
  const [showCertificate, setShowCertificate] = useState(false);

  const openCertificate = () => {
    setShowCertificate(cSrc);
    document.body.classList.add("overflow-hidden");
  };

  const closeCertificate = () => {
    setShowCertificate(null);
    document.body.classList.remove("overflow-hidden");
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  const plainTextDescription = description.replace(/<[^>]*>?/gm, "");
  const truncatedDescription = plainTextDescription.substring(0, 40) + "...";

  const formatSkills = (maxVisible = 2) => {
    if (skills.length <= maxVisible) {
      return skills.join(", ");
    }

    const visibleSkills = skills.slice(0, maxVisible);
    const remainingCount = skills.length - maxVisible;
    return `${visibleSkills.join(", ")} and ${remainingCount} more`;
  };

  return (
    <>
      <div className="text-white px-5 text-[0.94rem] pt-4 pb-4 w-full flex">
        <div className="w-1/10 p-1">
          <div className="">
            <img
              src={imgSrc}
              alt={name}
              className="size-12 rounded-xl bg-white p-1"
            />
          </div>
        </div>
        <div className="w-full p-1">
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg">{name}</h1>
          </div>
          <div className="mt-1">
            <div className="flex gap-2 items-center">
              <h1 className="font-semibold text-base">{position}</h1>
              <p className="bg-[#38434f] px-1 py-0.5 rounded-xl text-xs ">
                {category}
              </p>
            </div>
            <p className="text-sm ">{worktype}</p>
            <p className="text-[#999b9d] text-xs">{duration}</p>
          </div>
          <div className="mt-3 leading-snug">
            {" "}
            {showFullDescription ? (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
              <div>
                {truncatedDescription}
                <button
                  onClick={() => setShowFullDescription(true)}
                  className="text-[#6eb1f3] hover:underline ml-2 cursor-pointer text-sm"
                >
                  show more
                </button>
              </div>
            )}
          </div>
          <div className="group w-fit" onClick={() => openCertificate()}>
            <div className="mt-3 flex items-center gap-3 cursor-pointer  w-fit">
              <div className="group-hover:text-yellow-500">
                <GiCutDiamond />
              </div>
              <p className="font-semibold group-hover:text-[#6eb1f3] group-hover:underline">
                {formatSkills()}
              </p>
            </div>
            <div className="mt-3 flex gap-5 items-center cursor-pointer w-fit group">
              <img
                src={cSrc}
                alt="Certificate"
                className="rounded-lg  w-32 h-16 "
              />
              <p className="text-base font-semibold group-hover:text-[#6eb1f3]">
                {cName}
              </p>
            </div>
          </div>
          {/* Certificate Modal */}
          {showCertificate && (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 animate-fadeIn"
              onClick={closeCertificate}
            >
              <div
                className="relative w-fit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-black flex items-center justify-center p-4 rounded-lg border border-[#373a3d] mt-10 relative">
                  <div className="flex gap-2">
                    <img
                      src={showCertificate}
                      alt="Certificate"
                      className=" max-h-[60vh] max-w-[80vh] rounded-xl"
                    />
                    <div className="min-w-[40vh] max-w-[40vh] px-4">
                      <h1 className="font-bold text-lg">{cName}</h1>
                      <div
                        className="pt-2"
                        dangerouslySetInnerHTML={{ __html: cDescription }}
                      />
                      <div className="pt-4">
                        <h1 className="font-bold text-lg pb-2">Skills: </h1>
                        {skills.map((skill) => (
                          <span

                            className="bg-[#38434f] px-2 py-1 rounded-lg text-xs mr-2 mb-2 inline-block"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-[#999b9d] text-[#1b1f23] top-0 right-0 cursor-pointer m-3 p-1 rounded-full hover:scale-105 transition-all duration-200"
                    onClick={closeCertificate}
                  >
                    <IoClose className="size-[1.2rem]" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExperienceIndividualComponent;
