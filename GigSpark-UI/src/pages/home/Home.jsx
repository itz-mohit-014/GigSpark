import React from "react";
import Hero from "../../components/hero/HeroSection";
import Slider from "../../components/slider/Slider";
import FeatureSection from "../../components/features/Features";
import BusinessFeatures from "../../components/features/BusinessFeatures";
import { categoryCardsData, projectsData } from "../../mocks/data";
import ProjectCard from "../../components/projects/ProjectCard";
import GigsCard from "../../components/popularGigsCard/GigsCard";

const Home = () => {
  return (
    <main className="space-y-16">
      <Hero />
      <Slider
        title={"Popular services"}
        Item={GigsCard}
        data={categoryCardsData}
        cardLimit={"sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"}
      />
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
