import React from "react";
import Hero from "../../components/hero/HeroSection";
import FeatureSection from "../../components/features/Features";
import BusinessFeatures from "../../components/features/BusinessFeatures";
import PopularCategory from "../../components/popularCategories/PopularCategory";
import ExploreCategory from "../../components/exploreCategory/ExploreCategory";

import ProjectCard from "../../components/projects/ProjectCard";

import Slider from "../../components/slider/Slider";
import CategoryCardShimmerUI from "../../components/ui/shimmerUI/CategoryCard";

const Home = () => {
  return (
    <main className="space-y-16 overflow-x-hidden" id="home">
      <Hero />
      <PopularCategory/>
      <FeatureSection />
      <BusinessFeatures />
      <ExploreCategory/>
    </main>
  );
};

export default Home;