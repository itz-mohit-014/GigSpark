import React from "react";
import ExploreCategory from "../exploreCategory/ExploreCategory.jsx";
import VideoSection from "./VideoSection.jsx";
import { StickyScroll } from "../ui/sticky-scroll-reveal.jsx";

const FeatureSection = () => {
  return (
    <section className="w-full p-4 sm:p-6">
      <div className="max-w-screen-xl mx-auto mb-10 *:min-h-screen">
        <StickyScroll
          content={featuresList}
          height={"h-screen"}
          heading={
            <span>A whole world of{" "}
              <i className="bg-gradient-to-r from-purple-500 to-emerald-500 bg-clip-text text-transparent underline underline-offset-4 decoration-wavy decoration-yellow-500 ">
                freelance talent
              </i>{" "}
              at your fingertips</span>
          }
        />
      </div>
      <VideoSection />
      <ExploreCategory />
    </section>
  );
};

const FeatureItemImage = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src="./img/features.png"
        alt="GigSpark Freelance features"
        className="mix-blend-multiply brightness-125 hidden lg:block animate-out"
      />
    </div>
  );
};

const featuresList = [
  {
    title: "The best for every budget",
    description:
      "Find high-quality services at every price point, ensuring you get the best value for your money. With no hourly rates and transparent project-based pricing, you can focus on what matters most without worrying about hidden fees.",
    content: <FeatureItemImage />,
  },
  {
    title: "Quality work done quickly",
    description:
      "Discover top freelancers ready to begin working on your project within minutes. Enjoy a seamless experience with professionals who deliver outstanding results promptly, ensuring your project stays on track.",
    content: <FeatureItemImage />,
  },
  {
    title: "Protected payments, every time",
    description:
      "Always know what you'll pay upfront with our secure payment system. Your funds remain protected and are only released to freelancers once you are completely satisfied with the work delivered.",
    content: <FeatureItemImage />,
  },
  {
    title: "24/7 support",
    description:
      "Get assistance whenever you need it with our dedicated customer support team available around the clock. Whether it's a question, concern, or guidance, we're here to help you every step of the way.",
    content: <FeatureItemImage />,
  },
];

export default FeatureSection;
