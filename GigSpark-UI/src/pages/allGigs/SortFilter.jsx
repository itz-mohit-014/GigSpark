import React, { useEffect, useState } from "react";

import { FaFilter } from "react-icons/fa6";
import { AiOutlineClear } from "react-icons/ai";
import { useSortedByDate, useSortedByPopularity, useSortedByRecommendation } from "../../hooks/useSortMethods";

const SortFilter = ({ AllGigCards, setGigCards }) => {
  const [budgetFilter, setBudgetFilter] = useState({ min: "", max: "" });

  const [sortMethod, setSortMethod] = useState("Popular");

  const handleSetMinMaxValue = (e) => {
    setBudgetFilter((old) => {
      return { ...old, [e.target.id]: e.target.value };
    });
  };

  const handleFilter = () => {
    const { min, max } = budgetFilter;
    if (!min && !max) return;
    let updateList = [];
    if (max === "") {
      updateList = AllGigCards.filter((gig) => gig?.services?.price >= +min);
    } else if (min === "") {
      updateList = AllGigCards.filter((gig) => gig?.services?.price <= +max);
    } else {
      updateList = AllGigCards.filter(
        (gig) => gig.price <= +max && gig?.services?.price >= +min
      );
    }
    setGigCards(updateList);
  };

  const handleSorting = (e) => {
    const method = e.target.value;
    setSortMethod(e.target.value);

    let updateList = [];
    if (method === "Popular") {
      updateList = useSortedByPopularity(AllGigCards);
    } else if (method === "Newest") {
      updateList = useSortedByDate(AllGigCards);
    } else {
      updateList = useSortedByRecommendation(AllGigCards);  
      if(!updateList) return;
    }
    setGigCards(updateList);
  };

  const handleResetFilter = () => {
    setBudgetFilter({ min: "", max: "" });
    setGigCards(AllGigCards);
  };

  useEffect(() => {
    if(!budgetFilter.min && !budgetFilter.min){
      setGigCards(AllGigCards)
    }
  }, [ budgetFilter ])

  return (
    <div className="flex gap-4 items-center justify-between flex-wrap py-4 mt-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-lg font-semibold">Budget:</span>
        <input
          type="number"
          name="minimum"
          id="min"
          value={budgetFilter.min}
          onChange={handleSetMinMaxValue}
          className="border-[2px] outline-none border-gray-400 focus:border-blue-700 transition-all duration-200 rounded-md bg-transparent text-sm text-blue-950 font-semibold px-2 py-1 placeholder:text-gray-600 w-full max-w-52 min-w-20"
          placeholder="min"
          min={0}
        />
        <input
          type="number"
          name="maximum"
          id="max"
          value={budgetFilter.max}
          onChange={handleSetMinMaxValue}
          className="border-[2px] outline-none border-gray-400 focus:border-blue-700 transition-all duration-200 rounded-md bg-transparent text-sm text-blue-950 font-semibold px-2 py-1 placeholder:text-gray-600 w-full max-w-52 min-w-20"
          placeholder="max"
          min={0}
        />
        <div className="flex items-center gap-2">
          <button
            onClick={handleFilter}
            className="px-3 py-1.5 active:scale-95 text-sm rounded-md disabled:bg-gray-400 bg-teal-600 hover:bg-teal-800 flex gap-2 items-center disabled:text-gray-300 disabled:scale-100 disabled:cursor-not-allowed text-teal-50 font-medium"
            disabled={!budgetFilter.min && !budgetFilter.max}
          >
            <FaFilter />
            <span>Filter</span>
          </button>
          <button
            onClick={handleResetFilter}
            className="px-3 py-1 active:scale-95 text-sm rounded-md border-[2px] disabled:border-gray-400 border-teal-600 hover:border-teal-800 flex gap-2 items-center disabled:text-gray-400 disabled:scale-100 disabled:cursor-not-allowed text-teal-700 font-medium"
            disabled={!budgetFilter.min && !budgetFilter.max}
          >
            <AiOutlineClear />
            <span> Reset </span>
          </button>
        </div>
      </div>
      <div>
        <span className="text-base font-medium text-blue-900/70 mr-2">
          Sort by:{" "}
        </span>
        <select
          defaultValue={sortMethod}
          onChange={handleSorting}
          className="border-2 border-blue-950 py-1 px-3 rounded-md bg-blue-50 text-slate-800 font-medium">
          <option value="Newest">Newest</option>
          <option value="Popular">Popular</option>
          <option value="Recommended" className="disabled:bg-gray-400 disabled:text-gray-300" disabled={!useSortedByRecommendation(AllGigCards)}>Recommended</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
