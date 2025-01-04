import React from "react";
import Hero from "../../components/hero/HeroSection";
import Slider from "../../components/slider/Slider";
import FeatureSection from "../../components/features/Features";
import BusinessFeatures from "../../components/features/BusinessFeatures";
import { projectsData } from "../../mocks/data";
import ProjectCard from "../../components/projects/ProjectCard";
import GigsCard from "../../components/popularGigsCard/GigsCard";
import { useSelector } from "react-redux";
import CategoryCardShimmerUI from "../../components/ui/shimmerUI/CategoryCard";

const Home = () => {
  const AllCategories = useSelector((store) => store?.category);

  return (
    <main className="space-y-16 overflow-x-hidden" id="home">
      <Hero />
      <div className="max-w-screen-xl mx-auto p-4 sm:p-6 ">
        {AllCategories.length <= 0 ? (
          <Slider
            title={
              <p className="h-6 rounded-full w-60 bg-gray-300 animate-pulse"></p>
            }
            Item={CategoryCardShimmerUI}
            data={Array(8).fill(0)}
            cardLimit={"sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"}
            className={"md:px-8 px-6 max-w-screen-xl"}
          />
        ) : (
          <Slider
            title={"Popular services"}
            Item={GigsCard}
            data={AllCategories}
            cardLimit={"sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"}
            className={"md:px-8 px-6 max-w-screen-xl"}
          />
        )}
      </div>
      <FeatureSection />
      <BusinessFeatures />

      <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
        {AllCategories.length <= 0 ? (
          <Slider
            title={
              <p className="h-6 rounded-full w-60 bg-gray-300 animate-pulse"></p>
            }
            Item={CategoryCardShimmerUI}
            data={Array(8).fill(0)}
            cardLimit={"sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"}
            className={"md:px-8 px-6 max-w-screen-xl"}
          />
        ) : (
          <Slider
          title={"Guides to help you grow"}
          Item={ProjectCard}
          data={projectsData}
          cardLimit={""}
          className={"md:px-8 max-w-screen-xl"}
        />
        )}
      </div>
    </main>
  );
};

export default Home;
