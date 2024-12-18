import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { FaCircleCheck } from "react-icons/fa6";
import NewGigForm from "../forms/NewGigForm";
import NewGigServices from "../forms/NewGigServices";
import PublishGigPopup from "../ui/PublishGigPopup";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { setCurrentStep } from "../../slices/formSteps";
import { useFieldArray, useForm } from "react-hook-form";
import { createNewGig } from "../../utils/gig";
import { changeLoadingState } from "../../slices/showLoginForm.slice";
import toast from "react-hot-toast";

const RenderSteps = () => {
  const currentStep = useSelector((store) => store.currentFormStep);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSteps = [
    { id: 1, title: "Gig Information" },
    { id: 2, title: "Course Services" },
    { id: 3, title: "Publish" },
  ];

  const handleNextStep = (step) => {
    if (step < 1) step = 1;
    else if (step > 3) step = 3;
    console.log(step);
    clearErrors();
    const data = getValues();

    if (step == 2) {
      const emptyField1 = Object.entries(data).filter(
        (entry) => entry[1].length <= 0 && entry
      );

      if (emptyField1.length > 1) { 
        // 1 will be due to images array which is not required.
        console.log('checking empty field...', emptyField1)
        emptyField1.forEach((field) => {
          if (field[0] != "images") {
            setError(`${field[0]}`, {
              type: "manual",
              message: `${field[0]} is required`,
            });
          }
        });

        console.log(errors);
        // return;
      }
    } else if (step == 3) {
      const emptyField2 = Object.entries(data?.services).filter(
        (entry) => entry[1].length <= 0 && entry
      );

      if (emptyField2.length) {
        console.log('checking empty 2 field...', emptyField2)

        emptyField2.forEach((field) => {
          setError(`services.${field[0]}`, {
            type: "manual",
            message: `${field[0]} is required`,
          });
        });

        console.log(errors);
        // return;
      }
    }

    dispatch(setCurrentStep(step));
    console.log(errors);
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    control,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      keywords: [],
      coverPicture: [],
      category: "",
      services: {
        serviceTitle: "",
        serviceDescription: "",
        price: "",
        deliveryTime: "",
        features: [],
      },
    },
  });

  const { remove: removeKeyword, append: appendKeyword } = useFieldArray({
    control,
    name: "keywords",
  });

  const { remove: removeCoverPicture, append: appendCoverPicture } =
    useFieldArray({
      control,
      name: "coverPicture",
    });

  const { remove: removeImages, append: appendImages } = useFieldArray({
    control,
    name: "images",
  });

  const { remove: removeFeatures, append: appendFeatures } = useFieldArray({
    control,
    name: "services.features",
  });

  const handleCreateNewGig = async (data) => {
    dispatch(changeLoadingState(true));
    const toastId = toast.loading("Creating New Gig...")
    const formData = new FormData();

    const appendArrayField = (key) => {
      if (data[key]?.length) {
        data[key].forEach((file) => {
          formData.append(`${key}`, file);
        });
      }
    };

    Object.keys(data).forEach((key) => {
      if (key === "coverPicture" || key === "images") {
        appendArrayField(key);
      } else if (key === "keywords" || key === "services") {
        const value = JSON.stringify(data[key]);
        formData.append(key, value);
      } else {
        formData.append(key, data[key]);
      }
    });

    const response = await createNewGig(formData);
    console.log(response);
    console.log(data);

    toast.success(response?.message, {id: toastId})
    dispatch(changeLoadingState(false));
    navigate("/myGigs")
    handleNextStep(1)
  };

  return (
    <div className="w-full">
      <div className="w-full flex p-6 px-10">
        {formSteps.map((step) => (
          <div
            className="flex flex-col items-center gap-2 relative flex-1"
            key={step.id}
          >
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
        <form onSubmit={handleSubmit(handleCreateNewGig)}>
          {currentStep === 1 && (
            <NewGigForm
              register={register}
              setValue={setValue}
              errors={errors}
              getValues={getValues}
              removeImages={removeImages}
              appendImages={appendImages}
              removeKeyword={removeKeyword}
              appendKeyword={appendKeyword}
              removeCoverPicture={removeCoverPicture}
              appendCoverPicture={appendCoverPicture}
            />
          )}
          {currentStep === 2 && (
            <NewGigServices
              getValues={getValues}
              register={register}
              errors={errors}
              remove={removeFeatures}
              append={appendFeatures}
            />
          )}
          {currentStep === 3 && <PublishGigPopup getValues={getValues} />}
        </form>
        {currentStep !== 3 && (
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
        )}
      </div>
    </div>
  );
};

export default RenderSteps;
