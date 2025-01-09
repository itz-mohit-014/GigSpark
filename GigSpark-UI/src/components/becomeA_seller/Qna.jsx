import React from "react";
import Faqs from "../faq's/FaqsContainer";
import { becomeA_Sellerfaqs } from "../../mocks/Faqs";

const Qna = () => {
  return (
    <div className="pb-16 py-24 px-2 bg-gray-100 rounded-2xl relative">

      <span className="absolute top-8 left-1/2 -translate-x-1/2 py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600">
        Q&A
      </span>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 py-5">
          Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Find clear and concise answers to the most common questions. Learn
            how to make the most out of your freelance journey.
          </p>
        </div>
        <Faqs data={becomeA_Sellerfaqs} className="" />
      </div>
    </div>
  );
};

export default Qna;
