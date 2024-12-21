import React from "react";
import { categoryData } from "../../mocks/categoryData";

const IconCard = ({item, baseUrl}) => {
  return <div
  key={item.id}
  className="relative z-[1] flex flex-col items-center justify-between group cursor-pointer p-2 gap-2"
>
  <img src={`${baseUrl}${item.iconsSrc}`} alt="" className="w-12" />
  <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-custom-radial h-full aspect-square rounded-3xl z-[-1] opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
  <span className="inline-block h-[3px] w-10 rounded-full bg-slate-300 transition-all duration-300 group-hover:bg-green-400 group-hover:w-16"></span>
  <span className="text-sm text-center font-secondary">{item.title}</span>
</div>
}

const ExploreCategory = () => {
  const baseUrl =
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/";
 
  return (
    <div className="max-w-screen-xl mx-auto space-y-11 mt-20" id="explore-categories">
      <h3 className="font-primary text-2xl sm:text-3xl md:text-4xl font-medium">
        Explore the marketplace
      </h3>
      <div className="px-4 grid gap-10 justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categoryData.map((item, index) => (
          <IconCard key={index} item={item} baseUrl={baseUrl}/>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategory;
