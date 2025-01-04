import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Button from "../ui/Button";
import BrandsIconCarousel from "../brandsIconsCarousel/BrandsIconsCarousel";
import { useSelector } from "react-redux";

import LampDemo from "../ui/lamp";
import { BackgroundBeams } from "../ui/aurora-background";

const Hero = () => {
  const [value, setValue] = useState("");

  //current populat categori will be even index under 10; (starting 5 even index)
  const AllCategories = useSelector((store) => store?.category);

  const handleTagClick = (tagName) => {
    console.log(tagName);
  };

  const handleSearch = (e) => {
    setValue(e.target.value);
    // further action.
  };

  return (
    <section className="overflow-x-hidden relative w-full h-[calc(100dvh-76px)] text-blue-50 bg-gray-950">
      <BackgroundBeams className="h-[calc(100dvh-86px)]"/>

      <LampDemo>
        <div className={`flex flex-col gap-3 sm:gap-4 justify-center w-full`}>
          <div className={`relative overflow-hidden rounded-xl sm:rounded-lg flex items-center justify-center ${  AllCategories.length > 0 ? "pt-5" :"mt-16"}`}> 
            <BsSearch className="absolute sm:left-3 text-2xl right-0 max-sm:h-full max-sm:w-12 max-sm:bg-emerald-600 max-sm:hover:bg-emerald-700 max-sm:rounded-tl-lg max-sm:rounded-bl-lg max-sm:p-2.5 text-blue-50" />
            <input
              type="search"
              value={value}
              onChange={handleSearch}
              name="category-search"
              className="p-3 outline-none border-none bg-blue-50 text-blue-950 text-sm sm:text-base pl-4 pr-12 sm:pl-12 sm:pr-28 w-full"
              placeholder={`Try "Building mobile app"`}
            />
            <Button
              onClick={() => {
                console.log("search btn");
              }}
              className="hidden sm:inline-block absolute right-0 h-full text-blue-50 bg-emerald-600 hover:bg-emerald-700 px-6 border-none"
              children={"Search"}
              disabled={false}
            />
          </div>
          {
            AllCategories.length > 0 ? 
           <div className="flex gap-3 flex-wrap font-semibold">
            <span>Popular:</span>
            {AllCategories.length &&
              AllCategories.map(
                (cat, index) =>
                  index % 2 == 0 &&
                  index <= 10 && (
                    <Button
                      key={cat?._id}
                      onClick={() => handleTagClick(cat?._id)}
                      className="border border-emerald-50 rounded-full px-2.5 py-1 text-xs hover:text-blue-950 hover:bg-emerald-50 transition-all duration-200"
                      children={cat?.name}
                      disabled={false}
                    />
                  )
              )}
          </div>
          : null
        }
        </div>
      </LampDemo>
      
      <BrandsIconCarousel />
    </section>

  );
};

export default Hero;
