import React, { useState } from "react";
// icons
import { IoIosArrowDown } from "react-icons/io";
import { GrPowerCycle } from "react-icons/gr";
import { FaCheck, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";

const ServiceCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { price, title, description, includeItems } = data;
  // deliverdTime, revisions,
  return (
    <div className="static top-0 lg:ml-auto lg:max-w-sm w-full min-w-[320px] bg-white border border-gray-300 rounded-sm  p-6 font-primary space-y-2">
      <div className="flex items-center justify-between space-x-2 pb-2 mt-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl font-bold text-gray-900">₹{price}</p>
      </div>
      <p className="text-base text-gray-500 font-medium">{description}</p>

      <div className="flex items-center justify-between space-x-2">
        {data?.deliverdTime && (
          <div className="flex items-center font-semibold text-base text-gray-600">
            <MdOutlineTimer className="text-xl mr-1" />
            {data?.deliverdTime}-day delivery
          </div>
        )}
        {data?.revisions && (
          <div className="flex items-center font-semibold text-base text-gray-600">
            <GrPowerCycle className="text-xl mr-1" />
            {data?.revisions} Revision
          </div>
        )}
      </div>

      <div className="py-2">
        <p
          className="flex justify-between items-center gap-2"
          onClick={() => setOpen(!open)}
        >
          {" "}
          <span className="font-bold"> What's Included </span>
          <IoIosArrowDown
            className={`${
              open ? "rotate-180" : "rotate-0"
            } transition-all duration-200`}
          />
        </p>
        {open && (
          <ul className="list-disc list-inside space-y-2 text-sm mb-4 pt-2 pl-4">
            {includeItems.map((text, index) => (
              <li
                key={index}
                className="list-none text-sm font-medium text-gray-500"
              >
                <FaCheck className="text-xl inline-block mr-2 text-gray-600" />
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition relative">
        Continue
        <FaArrowRightLong className="inline-block text-xl mr-auto absolute right-4 top-2.5" />
      </button>
    </div>
  );
};

export default ServiceCard;
