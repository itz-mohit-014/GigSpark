import React from "react";
import NewGigForm from "../forms/NewGigForm";
import NewGigServices from "../forms/NewGigServices";
import PublishGigPopup from "../ui/PublishGigPopup";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCurrentStep } from "../../slices/formSteps";

import { createNewGig } from "../../utils/gig";
import { changeLoadingState } from "../../slices/showLoginForm.slice";
import toast from "react-hot-toast";

const NewGigMultistepForm = () => {
  const currentStep = useSelector((store) => store.currentFormStep);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        console.log("checking empty field...", emptyField1);
        emptyField1.forEach((field) => {
          if (field[0] != "images") {
            setError(`${field[0]}`, {
              type: "manual",
              message: `${field[0]} is required`,
            });
          }
        });

        console.log(errors);
        return;
      }
    } else if (step == 3) {
      const emptyField2 = Object.entries(data?.services).filter(
        (entry) => entry[1].length <= 0 && entry
      );

      if (emptyField2.length) {
        console.log("checking empty 2 field...", emptyField2);

        emptyField2.forEach((field) => {
          setError(`services.${field[0]}`, {
            type: "manual",
            message: `${field[0]} is required`,
          });
        });

        console.log(errors);
        return;
      }
    }

    dispatch(setCurrentStep(step));
    console.log(errors);
  };

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
    const toastId = toast.loading("Creating New Gig...");
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

    toast.success(response?.message, { id: toastId });
    dispatch(changeLoadingState(false));
    navigate("/myGigs");
    handleNextStep(1);
  };

  return (
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
  );
};

export default NewGigMultistepForm;
