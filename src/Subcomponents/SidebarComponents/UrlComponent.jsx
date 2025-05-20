
import { useState } from "react";

import { IoCopy } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

const UrlComponent = () => {

  const [isCopied, setIsCopied] = useState(false);
  const link = "www.linkedin.com/in/elayabarathi";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl ml-4 mt-5">
        <div className="px-4 py-4 ">
          <div className="border-b border-[#4b4f56] pb-2">
            <div className="text-[#e9e9e9]">
              <h1 className="text-[18px] font-semibold">Profile URL</h1>
              <div className="flex relative text-[#8d8f91] ">
                <a
                  href="/"
                  className="text-[14px] pt-0.5 font-medium hover:text-[#6eb1f3] hover:underline cursor-pointer"
                >
                  {link}
                </a>
                <div className="absolute right-0 top-1 cursor-pointer hover:text-[#6eb1f3]">
                  <div className="relative">
                    <IoCopy onClick={handleCopy} />
                    {isCopied && (
                      <div className="absolute -top-7 -right-2 bg-[#3f3f3f] shadow-lg text-white text-xs px-2 py-1 rounded">
                        Copied!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://portfolio-three-pi-52.vercel.app/"
            target="_blank"
            className="text-[18px] pt-4 flex justify-center font-bold"
          >
            <button className="bg-[#cccccc] text-[#1b1f23] hover:bg-white transition-all duration-300 active:bg-[#cccccc] w-full flex items-center justify-center rounded-lg px-4 py-1 text-base gap-2 cursor-pointer">
              <div className="text-[1.2rem]">
                <LuExternalLink />
              </div>
              Portfolio
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default UrlComponent;
