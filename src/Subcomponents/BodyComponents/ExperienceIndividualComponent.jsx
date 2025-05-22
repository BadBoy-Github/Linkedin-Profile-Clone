import { GiCutDiamond } from "react-icons/gi";

const ExperienceIndividualComponent = ({
  imgSrc,
  name,
  position,
  worktype,
  category,
  duration,
  description,
  skills,
}) => {
  return (
    <>
      <div className="text-white px-5 text-[0.94rem] pt-4 pb-12 w-full flex">
        <div className="w-1/10 p-1">
          <div className="">
            <img
              src={imgSrc}
              alt="Corizo Logo"
              className="size-12 rounded-xl"
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
                {worktype}
              </p>
            </div>
            <p className="text-sm ">{category}</p>
            <p className="text-[#999b9d] text-xs">{duration}</p>
          </div>
          <div
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-6 flex items-center gap-3 cursor-pointer group">
            <div className="group-hover:text-yellow-500">
              <GiCutDiamond />
            </div>
            <p className="font-semibold group-hover:text-[#6eb1f3] group-hover:underline ">
              {skills}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceIndividualComponent;
