import React from "react";
import { cn } from "../../../lib/utils";
import { FaImage } from "react-icons/fa6";

const CategoryCardShimmerUI = () => {
  return (
    <div
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full aspect-[4/5]  snap-start animate-pulse duration-700"
      )}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
        <FaImage className="text-3xl text-gray-400" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-gray-700/0 to-gray-950/40 ">
        <p className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 w-1/2"></p>
        <p className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-1 w-2/3"></p>
      </div>
    </div>
  );
};

export default CategoryCardShimmerUI;
