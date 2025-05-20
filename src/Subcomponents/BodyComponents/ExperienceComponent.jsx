

const ExperienceComponent = () => {
  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-2 mb-2 pt-7 px-3">
        <div className="text-white px-5">
          <h1 className="font-semibold text-[1.2rem]">Experience</h1>
        </div>

        <div className="text-white px-5 text-[0.94rem] pt-4 pb-12 w-full flex">
          <div className="w-1/8 p-1">
            <div className="">
              <img
                src="/img/Experience/corizo.jpg"
                alt="Corizo Logo"
                className="size-14 rounded-xl"
              />
            </div>
          </div>
          <div className="w-7/8 p-1">
            <div className="flex flex-col">
              <h1 className="font-semibold text-lg">Corizo</h1>
              <div className="flex gap-2 items-center">
                <p className="text-sm flex">2 Months</p>
                <div className="bg-[#38434f] px-1 py-0.5 rounded-xl text-[0.6rem] flex justify-center items-center">
                  <p className="">Remote</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="">
                <h1 className="font-semibold text-base">Full Stack Dev Intern</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceComponent;
