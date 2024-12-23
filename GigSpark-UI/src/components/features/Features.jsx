import React from "react";
import { BsArrowUpRight, BsPatchCheckFill } from "react-icons/bs";
import Button from "../ui/Button";
import ExploreCategory from "../exploreCategory/ExploreCategory";
import VideoSection from "./VideoSection";

const FeatureCard = ({ title, desc }) => {
  return (
    <div className="w-full">
      <h1 className="font-primary text-base sm:text-xl font-semibold">
        <BsPatchCheckFill className="inline-block mr-2 text-blue-600 text-2xl align-middle" />
        {title}
      </h1>
      <p className="text-sm text-slate-500 sm:mt-2">{desc}</p>
    </div>
  );
};

const FeatureSection = () => {
  const featuresList = [
    {
      title: "The best for every budget",
      desc: "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
    },
    {
      title: "Quality work done quickly",
      desc: "Find the right freelancer to begin working on your project within minutes.",
    },
    {
      title: "Protected payments, every time",
      desc: "Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
    },
    {
      title: "24/7 support",
      desc: "Get assistance anytime with dedicated customer support available around the clock.",
    },
  ];

  const handleJoinNowBtn = (e) => {
    console.log(e.target.innerHTML);
  };

  return (
    <section className="w-full p-4 sm:p-6">
      <div className="max-w-screen-xl lg:py-12 lg:px-28 sm:py-10 py-6 px-8 sm:px-12 bg-blue-100 rounded-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="pt-4 space-y-6 sm:space-y-10 relative">
          <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-medium font-primary">
            A whole world of <i>freelance talent</i> at your fingertips
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {featuresList.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>
          <button
            onClick={handleJoinNowBtn}
            className="rounded-md bg-blue-950 border-none outline-none text-blue-50 p-3 px-5  font-medium active:scale-95"
          >
            Join now <BsArrowUpRight className="inline-block font-bold" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="./img/features.png"
            alt="GigSpark Freelance features"
            className="mix-blend-multiply brightness-125 hidden lg:block animate-out"
          />
        </div>
      </div>
      <VideoSection />
      <ExploreCategory/>
    </section>
  );
};

export default FeatureSection;
