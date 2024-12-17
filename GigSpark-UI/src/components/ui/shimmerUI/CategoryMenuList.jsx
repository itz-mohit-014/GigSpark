import React from "react";

const CategoryMenuListShimmerUi = () => {
  const categoryItems = Array(8).fill(0);

  return (
    <>
      {categoryItems.map((_, index) => (
        <li
        key={index}
          className="rounded-full h-3 w-24 bg-gray-300 animate-pulse inline-block duration-700 shrink-0"
        />
      ))}
    </>
  );
};

export default CategoryMenuListShimmerUi;
