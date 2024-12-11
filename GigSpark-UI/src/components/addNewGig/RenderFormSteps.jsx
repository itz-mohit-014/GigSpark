import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCircleCheck } from "react-icons/fa6";
import NewGigForm from "../forms/NewGigForm";
import NewGigServices from "../forms/NewGigServices";
import PublishGigPopup from "../ui/PublishGigPopup";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { setCurrentStep } from "../../slices/formSteps";

const RenderSteps = () => {
  const currentStep = useSelector((store) => store.currentFormStep);
  const [gigDetails, setGigDetails] = useState({
    title: "",
    description: "",
    keywords: [],
    coverPicture: "",
    images: [],
    category: "",
  });

  const [gigServiceDetails, setGigServiceDetails] = useState({
    serviceTitle: "",
    serviceDescription: "",
    price: "",
    deliveryTime: "",
    revisions: 0,
    features: [],
  });

  const dispatch = useDispatch();
  const formSteps = [
    { id: 1, title: "Gig Information" },
    { id: 2, title: "Course Services" },
    { id: 3, title: "Publish" },
  ];

  const handleNextStep = (step) => {
    if (step < 1) step = 1;
    else if (step > 3) step = 3;
    dispatch(setCurrentStep(step));
    console.log(gigDetails)
  };

  const handleCreateNewGig = () => {
    e.preventDefault();
    console.log({ ...gigDetails, ...gigServiceDetails });
  };

  return (
    <div className="w-full">
      <div className="w-full flex p-6 px-10">
        {formSteps.map((step) => (
          <div className="flex flex-col items-center gap-2 relative flex-1">
            <div className="h-10 w-10 bg-white relative z-10">
              {currentStep > step.id ? (
                <FaCircleCheck className="text-green-600 text-xl w-10 h-10" />
              ) : (
                <div className="font-medium *:text-xl *:flex *:items-center *:justify-center *:h-10 *:w-10 *:rounded-full *:relative *:z-[3]">
                  {step.id === currentStep ? (
                    <span className="text-yellow-500  border-[3px] border-yellow-500 bg-yellow-400/30 ">
                      {step.id}
                    </span>
                  ) : (
                    <span className=" text-gray-300 bg-gray-700/40 ">
                      {step.id}
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="">
              {step.id !== 3 && (
                <hr
                  className={`${
                    step.id <= currentStep - 1
                      ? "border-green-400"
                      : " border-gray-400 "
                  } border-[1px] border-dotted w-full absolute top-5 z-[0]`}
                />
              )}
            </div>
            <span
              className={`${currentStep > step.id && "text-green-600"} ${
                currentStep === step.id ? "text-yellow-500" : "text-gray-400"
              } font-medium`}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
      <div className="border-[2px] border-gray-200 rounded-lg p-6 shadow-xl">
        <form onSubmit={(e) => handleCreateNewGig(e)}>
          {currentStep === 1 && (
            <NewGigForm gigDetails={gigDetails} setGigDetails={setGigDetails} />
          )}
          {currentStep === 2 && (
            <NewGigServices
              gigServiceDetails={gigServiceDetails}
              setGigServiceDetails={setGigServiceDetails}
            />
          )}
          {currentStep === 3 && <PublishGigPopup />}
        </form>
        <div className="flex gap-2 py-8">
          <button
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition relative disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
            disabled={currentStep == 1}
            onClick={() => handleNextStep(currentStep - 1)}
          >
            <FaArrowLeftLong className="inline-block text-xl mr-2" />
            Previous
          </button>
          <button
            className=" bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition relative disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
            disabled={currentStep == 3}
            onClick={() => handleNextStep(currentStep + 1)}
          >
            Next
            <FaArrowRightLong className="inline-block text-xl ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderSteps;
