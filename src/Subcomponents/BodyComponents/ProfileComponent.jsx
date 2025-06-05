import React, { useState } from "react";

// Import Icons
import { MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { BiSolidSend } from "react-icons/bi";
import { GoBellFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { MdRecommend } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { RiUserUnfollowFill } from "react-icons/ri";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { RiFlagFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

// Import Component
import GitHubSnake from "./GithubSnake";

const ProfileComponent = () => {
  // Function to handle the click event on the banner image
  const [selectedImage, setSelectedImage] = useState(null);
  // Function to handle the click event on the more button
  const [selectMore, setSelectMore] = useState(false);
  // Function to handle the click event on the contact info button
  const [isContactInfoOpen, setIsContactInfoOpen] = useState(false);

  // Function to handle the click event on the banner image
  const openImage = (imgUrl) => {
    setSelectedImage(imgUrl);
    document.body.classList.add("overflow-hidden");
  };
  const closeImage = () => {
    setSelectedImage(null);
    document.body.classList.remove("overflow-hidden");
  };

  // Function to handle the click event on the more button
  const toggleMore = () => {
    setSelectMore((prev) => !prev);
  };

  // Function to handle the click event on the contact info button
  const openContactInfo = () => {
    setIsContactInfoOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const closeContactInfo = () => {
    setIsContactInfoOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className="bg-[#1b1f23] h-fit w-full rounded-xl mr-2 mt-5 mb-2 pb-1">
        {/* Banner and Profile Image */}
        <div className="rounded-t-xl w-full h-full relative">
          <img
            src="/img/LinkedIn Banner.png"
            alt="linkedin banner"
            className="w-full rounded-t-xl rounded-b-sm active:outline outline-[#999b9d] cursor-pointer"
            onClick={() => openImage("/img/LinkedIn Banner.png")}
          />

          <div className="absolute size-[19%] top-[45%] left-[3%] ">
            <img
              src="/img/LinkedIn Profile.png"
              alt="linkedin profile"
              className="absolute rounded-full border-[4px] border-[#1b1f23] cursor-pointer"
              onClick={() => openImage("/img/LinkedIn Profile.png")}
            />
          </div>
        </div>
        {/* Selecting Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 animate-fadeIn "
            onClick={closeImage}
          >
            <div
              className="relative w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black flex items-center justify-center p-4 rounded-lg border border-[#373a3d] mt-10 relative">
                <div className="">
                  <img
                    src={selectedImage}
                    alt="Selected Linkedin Banner Image"
                    className=" max-h-[40vh] max-w-[120vh] rounded-xl"
                  />
                </div>
                <div
                  className="absolute bg-[#999b9d] text-[#1b1f23] top-0 right-0 cursor-pointer m-3 p-1 rounded-full hover:scale-105 transition-all duration-200 hover:bg-red-600 hover:text-white"
                  onClick={closeImage}
                >
                  <IoClose className="size-[1.2rem]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Info */}
        <div className="relative ">
          <div className="absolute right-[3%] bottom-[100%] bg-[#6eb1f3] hover:bg-[#4aa1f8] active:bg-[#6eb1f3] transition-all duration-300 text-[#38434f] p-1 rounded-full cursor-pointer">
            <GoBellFill className="size-[1.4rem] bell-animation" />
          </div>
          <div className="mt-[6%] p-5">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-semibold">
                Elayabarathi M V
              </h1>
              <div className="text-[#6eb1f3] text-[1.3rem] ml-3">
                <MdVerified />
              </div>
              <p className="text-[#6f7274] text-sm ml-2 font-extralight">
                (He/Him)
              </p>
            </div>

            <div className="">
              <p className="text-white text-[1.04rem] pt-0.5">
                Biotechnologist | Frontend Web Dev | Enthusiast in Scientific &
                Technological Innovations
              </p>
              <div className="flex items-center mt-1 text-[#999b9d] text-[0.82rem]">
                <p className="font-semibold ">Namakkal, Tamil Nadu, India</p>
                <div className="px-1">
                  <GoDotFill className="size-[0.4rem]" />
                </div>
                <p
                  className="text-[#6eb1f3] font-bold hover:underline active:underline cursor-pointer"
                  onClick={() => {
                    openContactInfo();
                  }}
                >
                  Contact info
                </p>
              </div>
            </div>
            {/* Selecting Contact Info Modal */}
            {isContactInfoOpen && (
              <div
                className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 animate-fadeIn"
                onClick={closeContactInfo}
              >
                <div
                  className="relative w-fit"
                  onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                >
                  <div className="bg-[#1b1f23] flex p-4 rounded-lg border border-[#373a3d] mt-10 relative w-lg">
                    <div className=" w-full">
                      <div className="flex items-center justify-start p-2">
                        <h1 className="font-bold text-xl">Elayabarathi M V</h1>
                      </div>
                      <div className="flex flex-col w-full gap-2 mt-2 bg-[#293138] rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <MdVerified className="size-[1.3rem] text-[#6eb1f3]" />
                          <h1 className="font-medium text-lg">
                            Verified phone number
                          </h1>
                        </div>
                        <div className="flex items-center ml-2">
                          <div className="flex items-baseline">
                            <span>
                              A phone number associated with this account has
                              been verified. Learn more about{" "}
                              <span
                                onClick={() =>
                                  window.open(
                                    "https://www.linkedin.com/help/linkedin/answer/a1337715/",
                                    "_blank"
                                  )
                                }
                                className="text-[#6eb1f3] hover:underline cursor-pointer font-medium"
                              >
                                account verification
                              </span>
                              .
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" flex flex-col gap-2 mb-2 p-4 w-full ">
                        <h1 className="text-xl font-semibold pb-1">
                          Contact Info
                        </h1>
                        <div className="flex flex-col gap-3 ">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-fit h-fit p-1 rounded-sm text-[#1b1f23] bg-[#e9e9e9]">
                              <FaLinkedinIn className="size-[1.2rem]" />
                            </div>
                            <div className="flex flex-col text-base mx-2">
                              <p className="font-semibold">
                                Elayabarathi's Profile
                              </p>
                              <p className="text-[#6eb1f3] font-semibold text-sm hover:underline cursor-pointer">
                                linkedn.com/in/elayabarathi
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-fit h-fit p-1 rounded-sm  text-[#e9e9e9]">
                              <FaPhone className="size-[1.2rem]" />
                            </div>
                            <div className="flex flex-col text-base mx-2">
                              <p className="font-semibold">Phone</p>
                              <div className="flex items-center gap-1">
                                <p className="text-white text-sm ">
                                  +91 98428 52121
                                </p>
                                <p className="text-sm text-[#999b9d]">
                                  (Mobile)
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-fit h-fit p-1 rounded-sm  text-[#e9e9e9]">
                              <FaLocationDot className="size-[1.2rem]" />
                            </div>
                            <div className="flex flex-col text-base mx-2">
                              <p className="font-semibold">Address</p>
                              <div className="flex items-center gap-1">
                                <p
                                  className="text-[#6eb1f3] font-semibold text-sm hover:underline cursor-pointer"
                                  onClick={() => {
                                    window.open(
                                      "https://www.google.com/maps/place//@11.3682272,77.9304153,17.75z?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
                                      "_blank"
                                    );
                                  }}
                                >
                                  4/352, Pudhur road, Kumaramangalam,
                                  Tiruchengode, Namakkal, Tamilnadu - 637205.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-fit h-fit p-1 rounded-sm  text-[#e9e9e9]">
                              <IoMailOpen className="size-[1.2rem]" />
                            </div>
                            <div className="flex flex-col text-base mx-2">
                              <p className="font-semibold">Email</p>
                              <div className="flex items-center gap-1">
                                <a
                                  href="mailto:elayabarathimv@gmail.com"
                                  className="text-[#6eb1f3] font-semibold text-sm hover:underline cursor-pointer"
                                >
                                  elayabarathimv@gmail.com
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-fit h-fit p-1 rounded-sm  text-[#e9e9e9]">
                              <FaBirthdayCake className="size-[1.2rem]" />
                            </div>
                            <div className="flex flex-col text-base mx-2">
                              <p className="font-semibold">Birthday</p>
                              <div className="flex items-center gap-1">
                                <a className="text-white text-sm">
                                  January 28 2003
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-fit h-fit p-1 rounded-sm  text-[#e9e9e9]">
                              <HiUserGroup className="size-[1.2rem]" />
                            </div>
                            <div className="flex flex-col text-base mx-2">
                              <p className="font-semibold">Connected</p>
                              <div className="flex items-center gap-1">
                                <a className="text-sm text-white">
                                  January 25 2023
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-[#999b9d] text-[#1b1f23] top-0 right-0 cursor-pointer m-3 p-1 rounded-full hover:scale-105 transition-all duration-200 hover:bg-red-600 hover:text-white"
                      onClick={closeContactInfo}
                    >
                      <IoClose className="size-[1.2rem]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center text-[#6eb1f3] text-[0.82rem] font-semibold mt-1">
              <p className="hover:underline cursor-pointer">2,583 followers</p>
              <div className="px-1 text-white">
                <GoDotFill className="size-[0.4rem]" />
              </div>
              <p className="hover:underline cursor-pointer">
                2,571 connections
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mx-5 flex items-center gap-3">
          <button className="group bg-[#6eb1f3] hover:bg-[#4aa1f8] active:bg-[#6eb1f3] transition-colors duration-300 text-[#38434f] rounded-full px-4 py-1 text-base font-semibold flex items-center gap-2 cursor-pointer">
            <div className="text-[1.2rem] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[-10deg] group-hover:animate-pulse">
              <BiSolidSend />
            </div>
            Message
          </button>
          <div className="relative">
            <button
              className="outline-1 outline-white text-white transition-all rounded-full px-4 py-1 text-base font-semibold flex items-center gap-2 cursor-pointer group"
              onClick={() => {
                toggleMore();
              }}
            >
              More
              <span className="text-[1.2rem]">
                {selectMore ? (
                  <IoMdArrowDropup className="block" />
                ) : (
                  <IoMdArrowDropdown className="hidden group-hover:block" />
                )}
              </span>
            </button>
            {/* Selecting More Option Modal */}
            {selectMore && (
              <div className="absolute top-full mt-2 w-60 z-10 flex flex-col gap-1 items-start justify-center bg-[#1b1f23] rounded-lg border border-[#373a3d] p-2">
                <div className="flex items-center gap-4 w-full text-white hover:bg-[#313539] cursor-pointer rounded-lg p-2 transition-all duration-300 group">
                  <MdPersonRemove className="group-hover:scale-125" />
                  <p className="text-xs">Remove Connection</p>
                </div>
                <div className="flex items-center gap-4 w-full text-white hover:bg-[#313539] cursor-pointer rounded-lg p-2 transition-all duration-300 group">
                  <RiUserUnfollowFill className="group-hover:scale-125" />
                  <p className="text-xs">Unfollow</p>
                </div>
                <div className="flex items-center gap-4 w-full text-white hover:bg-[#313539] cursor-pointer rounded-lg p-2 transition-all duration-300 group">
                  <TbArrowLeftFromArc className="group-hover:scale-125" />
                  <p className="text-xs">Send profile in a message</p>
                </div>
                <div className="flex items-center gap-4 w-full text-white hover:bg-[#313539] cursor-pointer rounded-lg p-2 transition-all duration-300 group">
                  <FaCodePullRequest className="group-hover:scale-125" />
                  <p className="text-xs">Request a recommendation</p>
                </div>
                <div className="flex items-center gap-4 w-full text-white hover:bg-[#313539] cursor-pointer rounded-lg p-2 transition-all duration-300 group">
                  <MdRecommend className="group-hover:scale-125" />
                  <p className="text-xs">Recommend</p>
                </div>
                <div className="flex items-center gap-4 w-full text-white hover:bg-[#313539] cursor-pointer rounded-lg p-2 transition-all duration-300 group">
                  <FaSave className="group-hover:scale-125" />
                  <p className="text-xs">Save to PDF</p>
                </div>
                <div className="flex items-center gap-4 w-full text-white hover:bg-[#313539] cursor-pointer rounded-lg p-2 transition-all duration-300 group">
                  <RiFlagFill className="group-hover:scale-125" />
                  <p className="text-xs">Report/Block</p>
                </div>
                <div className="flex items-center gap-4 w-full text-white hover:bg-[#313539] cursor-pointer rounded-lg p-2 transition-all duration-300 group">
                  <FcAbout className="group-hover:scale-125" />
                  <p className="text-xs">About this profile</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Open to Work Section */}
        <div className=" flex  my-6 w-full h-fit">
          <div className=" ml-5 rounded-xl text-white text-sm  w-full flex h-42 gap-6">
            <div className="bg-[#38434f] rounded-xl p-4 w-[46%] mr-1 relative  ">
              <p className="font-semibold">Open to work</p>
              <p className="pt-2 line-clamp-4 overflow-hidden text-ellipsis">
                Microbiologist, Biotechnologist, Biological Technician, Video
                Editor and Computer Technician roles
              </p>
              <p className="text-[#6eb1f3] font-semibold cursor-pointer hover:underline pt-1 w-fit absolute bottom-4">
                Show details
              </p>
            </div>
            <div className="bg-[#38434f] rounded-xl p-4 w-[46%] ml-1 relative">
              <p className="font-semibold">Open to volunteering</p>
              <p className="pt-2 line-clamp-3 overflow-hidden text-ellipsis">
                Arts and Culture, Science and Technology, Social Services
              </p>
              <p className="text-[#6eb1f3] font-semibold cursor-pointer hover:underline pt-1 w-fit absolute bottom-4">
                Show details
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
