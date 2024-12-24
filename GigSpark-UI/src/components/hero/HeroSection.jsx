import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Button from "../ui/Button";
import BrandsIconCarousel from "../brandsIconsCarousel/BrandsIconsCarousel";
import { useSelector } from "react-redux";


const Hero = () => {
  const [value, setValue] = useState("")

  //current populat categori will be even index under 10; (starting 5 even index)
  const AllCategories = useSelector(store => store?.category);

  const handleTagClick = (tagName) => {
    console.log(tagName);
  };

  const handleSearch = (e) => {
    setValue(e.target.value);
    // further action.
  }

  return (
    <section className="relative w-full h-[calc(100vh-80px)] md:bg-slate-950 max-md:bg-gradient-to-b from-gray-950 from-50% to-gray-300 text-blue-50">
      <div className="grid gap-4 *:h-4/5 grid-cols-1 md:grid-cols-2 max-w-screen-xl p-4 px-8 pb-0 mx-auto h-[calc(100%-76px)]">
        <div className="flex flex-col gap-4 sm:gap-6 justify-center">
          <h1 className="font-primary text-[30px] sm:text-3xl md:text-[44px] md:leading-snug text-center md:text-start font-semibold">
            Find the perfect <i className="font-normal text-yellow-500 font-mono">freelance</i> services 
            for your business
          </h1>
          <div className="relative overflow-hidden rounded-xl sm:rounded-lg">
            <BsSearch className="absolute sm:left-3 sm:right-auto sm:top-3 top-1 right-1 bg-emerald-600 sm:bg-inherit h-9 w-9 sm:h-5 sm:w-5 p-2.5 sm:p-0 active:scale-95 cursor-pointer sm:cursor-auto sm:active:scale-100 rounded-xl sm:rounded-none text-blue-50 sm:text-slate-400 text-xl" />
            <input
              type="search"
              value={value}
              onChange={handleSearch}
              name="category-search"
              className="p-3 outline-none border-none bg-blue-50 text-blue-950 text-sm sm:text-base pl-4 sm:pl-12 pr-28 w-full"
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
          <div className="flex gap-3 flex-wrap font-semibold">
            <span>Popular:</span>
            { AllCategories.length && AllCategories.map((cat, index) => (
              index % 2 == 0 && index <= 10 && 
              <Button
                key={cat?._id}
                onClick={() => handleTagClick(cat?._id)}
                className="border border-emerald-50 rounded-full px-2.5 py-1 text-xs hover:text-blue-950 hover:bg-emerald-50 transition-all duration-200"
                children={cat?.name}
                disabled={false}
              />
            ))}
          </div>
        </div>
        <div className="h-full md:block hidden">
          <img src={"./img/hero-vector.svg"} alt="" className="h-full object-contain ml-auto" />
        </div>
      </div>
      <BrandsIconCarousel />
    </section>
  );
};

export default Hero;
