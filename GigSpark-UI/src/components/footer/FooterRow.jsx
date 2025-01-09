import React from "react";
import Logo from "../ui/Logo";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import darkLogo from "../../assets/logo/logo-dark.png";

const FooterRow = () => {
  const socialMedia = [
    { title: "Facebook", src: "#" },
    { title: "Instagram", src: "#" },
    { title: "LinkedIn", src: "#" },
    { title: "Twitter", src: "#" },
  ];

  const SocialIcon = [FaFacebook, FaInstagram, FaLinkedin, FaXTwitter];

  return (
    <div className="max-w-screen-xl mx-auto px-4 gap-4 gap-y-8 flex-wrap flex justify-center md:justify-between items-center">
      <div className="flex items-center flex-wrap gap-3">
        <Logo src={darkLogo} className={'scale-50 border'}/>
        <span className="ml-4  text-[14px] text-gray-400 font-primary">
          © GigSpark International Ltd. 2024
        </span>
      </div>
      <div className="flex gap-4 flex-wrap items-center text-gray-500 justify-center md:justify-between transition-all duration-200">
        {socialMedia.map((item, index) => {
          const Icon = SocialIcon[index];
          return (
            <span key={index} className="p-1 h-10 w-10 flex items-center justify-center rounded-full bg-inherit cursor-pointer hover:bg-blue-100 ">
              <Icon className="h-6 w-6 " />
            </span>
          );
        })}
        <span className="text-sm rounded-full bg-inherit cursor-pointer hover:bg-blue-100 p-1 px-2">
          <IoIosGlobe className="inline-block mr-1 text-3xl" /> English
        </span>
        <div className="p-1 rounded-full bg-inherit cursor-pointer hover:bg-blue-100 px-3">
          <span className="text-base font-primary">₹ INR</span>
        </div>
      </div>
    </div>
  );
};

export default FooterRow;
