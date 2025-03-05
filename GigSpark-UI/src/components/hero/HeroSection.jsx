import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import Button from "../ui/Button.jsx";
import BrandsIconCarousel from "../brandsIconsCarousel/BrandsIconsCarousel.jsx";
import LampDemo from "../ui/lamp.jsx";
import { BackgroundBeams } from "../ui/aurora-background.jsx";

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

      <LampDemo>
        <div className={`flex flex-col gap-3 sm:gap-4 justify-center w-full`}>
          <div
            className={`relative overflow-hidden rounded-xl sm:rounded-lg flex items-center justify-center ${
              AllCategories.length > 0 ? "mt-5" : "mt-16"
            }`}
          >
            <BsSearch className="absolute sm:left-3 text-2xl right-0 max-sm:h-full max-sm:w-12 max-sm:bg-emerald-600 max-sm:hover:bg-emerald-700 max-sm:rounded-tl-lg max-sm:rounded-bl-lg max-sm:p-2.5 max-sm:text-blue-50 text-gray-500" />
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
          {AllCategories.length > 0 ? (
            <div className="flex gap-3 flex-wrap font-semibold">
              <span className="align-middle">Popular:</span>
              {AllCategories.length &&
                AllCategories.map(
                  (cat, index) =>
                    index % 2 == 0 &&
                    index <= 10 && (
                      <button
                        key={cat?._id}
                        onClick={() => handleTagClick(cat?._id)}
                        className="relative inline-flex h-7 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                      >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-0.5 text-xs font-secondary text-white backdrop-blur-3xl">
                          {cat?.name}
                        </span>
                      </button>
                    )
                )}
            </div>
          ) : null}
        </div>
      </LampDemo>

      <BrandsIconCarousel />
    </section>
  );
};

export default Hero;