import React from "react";
import Hero from "../../components/hero/HeroSection";
import Slider from "../../components/slider/Slider";
import FeatureSection from "../../components/features/Features";
import BusinessFeatures from "../../components/features/BusinessFeatures";
import { projectsData } from "../../mocks/data";
import ProjectCard from "../../components/projects/ProjectCard";
import GigsCard from "../../components/popularGigsCard/GigsCard";
import { useSelector } from "react-redux";

const Home = () => {
  const AllCategories = useSelector(store => store?.category)

  return (
    <main className="space-y-16">
      <Hero />
      { AllCategories.length <= 0 
      ? (
        <p>Shimmer UI will be shown</p>
      ) : (
        <Slider
          title={"Popular services"}
          Item={GigsCard}
          data={AllCategories}
          cardLimit={"sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"}
        />
      )}
      <FeatureSection />
      <BusinessFeatures />

      <Slider
        title={"Guides to help you grow"}
        Item={ProjectCard}
        data={projectsData}
        cardLimit={"basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"}
      />

    </main>
  );
};

export default Home;
