import { GiCutDiamond } from "react-icons/gi";
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
}) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  const plainTextDescription = description.replace(/<[^>]*>?/gm, "");
  const truncatedDescription = plainTextDescription.substring(0, 40) + "...";

  return (
    <>
      <div className="text-white px-5 text-[0.94rem] pt-4 pb-4 w-full flex">
        <div className="w-1/10 p-1">
          <div className="">
            <img
              src={imgSrc}
              alt="Corizo Logo"
              className="size-12 rounded-xl shadow-lg outline outline-white"
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
                  className="text-[#999b9d] hover:underline ml-2 cursor-pointer text-sm"
                >
                  show more
                </button>
              </div>
            )}
          </div>
          <div className="mt-3 flex items-center gap-3 cursor-pointer group w-fit">
            <div className="group-hover:text-yellow-500">
              <GiCutDiamond />
            </div>
            <p className="font-semibold group-hover:text-[#6eb1f3] group-hover:underline">
              {skills}
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
      </div>
    </>
  );
};

export default ExperienceIndividualComponent;
