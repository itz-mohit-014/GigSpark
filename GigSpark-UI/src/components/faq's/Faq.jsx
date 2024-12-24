import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Faq = ({ faq, setShowAnswer, showAnswer }) => {
  return (
    <div className="border-b border-gray-300 py-3 hover:border-l-blue-600 border-l-transparent border-l-4 rounded-md pl-3 transition-all">
      <h3
        className="w-full py-2 flex justify-between items-center text-left text-gray-800 font-medium focus:outline-none cursor-pointer"
        type="button"
        onClick={() => setShowAnswer()}
      >
        {faq.question}
        <FaChevronDown
          className={`"h-5 w-5 transform transition-transform duration-300 ${
            showAnswer ? "rotate-180" : "rotate-0"
          }`}
        />
      </h3>
      <p
        className={`mt-2 transition-all duration-300 origin-top ${
          showAnswer ? "scale-y-100 h-auto" : "scale-y-0 h-0"
        }`}
      >
        {faq.answer}
      </p>
    </div>
  );
};

export default Faq;
