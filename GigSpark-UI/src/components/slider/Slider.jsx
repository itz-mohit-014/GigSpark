import React from "react";
import { Carousel, CarouselNext, CarouselPrevious } from "../ui/Carousel.jsx";

import { Slide } from "./Slide";

const CategoryCarousel = ({ title, data, Item, cardLimit, className }) => {
  return (
    <div className="space-y-10 w-[calc(100%-16px)] bg-inherit">
      {title && (
        <h1 className="text-3xl md:text-4xl font-secondary">{title}</h1>
      )}

      <Carousel className={`w-full bg-inherit ${className}`}>
        <Slide Item={Item} data={data} cardLimit={cardLimit} />
        <CarouselPrevious className="bg-inherit" />
        <CarouselNext className="bg-inherit" />
        {/* <CarouselPrevious className="top-auto -bottom-16 left-auto right-12 sm:right-auto sm:top-1/2 sm:bottom-auto sm:-left-4 backdrop:blur-3xl" />
        <CarouselNext className="top-auto -bottom-16 right-0 sm:top-1/2 sm:bottom-auto sm:-right-4 backdrop:blur-3xl" /> */}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
