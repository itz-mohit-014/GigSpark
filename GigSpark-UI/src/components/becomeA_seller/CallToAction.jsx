import React from "react";
import GetStartedBtn from "./GetStartedBtn.jsx";
import { Meteors } from "../ui/meteors.jsx";

const CallToAction = () => {
  return (
    <div className="relative py-8 p-6 rounded-2xl mb-16 overflow-hidden bg-gray-950">
      <div className=" relative z-20 text-white text-center font-primary">
        <h2 className="mb-2 text-2xl sm:text-4xl">
          Sign up and create your first Gig today
        </h2>
        <p className="text-gray-500 mb-4">
          GigSpark Freelance services at your fingertips
        </p>
        <GetStartedBtn />
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/3 z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
          fillOpacity="0.7"
        ></circle>
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#3b82f6"></stop>
            <stop offset="1" stopColor="#1d4ed8"></stop>
          </radialGradient>
        </defs>
      </svg>
      <Meteors number={20}/>
    </div>
  );
};

export default CallToAction;
