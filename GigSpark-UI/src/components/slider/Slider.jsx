import React from "react";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel.jsx"

import { Slide } from "./Slide";

const CategoryCarousel = ({ title, data, Item, cardLimit }) => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-16 p-4 sm:p-6">
      <h1 className="text-3xl md:text-4xl font-secondary">{title}</h1>
      <Carousel className={"w-full md:px-8 px-6 max-w-screen-xl"}>
        <Slide Item={Item} data={data} cardLimit={cardLimit}/>
        <CarouselPrevious className="top-auto -bottom-16 left-auto right-12 sm:right-auto sm:top-1/2 sm:bottom-auto sm:-left-4" />
        <CarouselNext className="top-auto -bottom-16 right-0 sm:top-1/2 sm:bottom-auto sm:-right-4" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
