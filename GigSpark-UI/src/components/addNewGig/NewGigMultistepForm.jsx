import React, { useEffect, useState } from "react";
import NewGigForm from "../forms/NewGigForm";
import NewGigServices from "../forms/NewGigServices";
import PublishGigPopup from "../ui/PublishGigPopup";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCurrentStep } from "../../slices/formSteps";
import { createNewGig } from "../../utils/gig";
import { changeLoadingState } from "../../slices/showLoginForm.slice";
import toast from "react-hot-toast";
import { Gig } from "../../services/api";
import { newRequest } from "../../services/newRequest";
import { useNewGigForm } from "../../hooks/useNewGigForm";

const StepButton = ({ label, onClick, disabled, iconLeft, iconRight }) => (
  <button
    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition relative disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={disabled}
  >
    {iconLeft && <span className="inline-block mr-2">{iconLeft}</span>}
    {label}
    {iconRight && <span className="inline-block ml-2">{iconRight}</span>}
  </button>
);

const NewGigMultistepForm = () => {
  const currentStep = useSelector((store) => store.currentFormStep);

  const [defaultData, setDefaultData] = useState({
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
  })

  const dispatch = useDispatch();  
  const navigate = useNavigate();

  const {gigId} = useParams();
  const { SINGLE_GIG } = Gig

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
    validateStep,
    removeKeyword,
    appendKeyword,
    removeCoverPicture,
    appendCoverPicture,
    removeImages,
    appendImages,
    removeFeatures,
    appendFeatures,
  } = useNewGigForm();
  // } = useNewGigForm(defaultData);

  const handleNextStep = (step) => {
    const data = getValues();
    
    if(validateStep(step, data)) return;

    dispatch(setCurrentStep(step));
  };

  const handleCreateNewGig = async (data) => {
    
    dispatch(changeLoadingState(true));
    
    toast.dismiss();

    const toastId = toast.loading("Creating New Gig...");
    const formData = new FormData();

    // Append data to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value) && key !== "keywords") {

        value.forEach((item) => formData.append(key, item));
      
      } else {
        
        formData.append(
          key,
          typeof value === "object" 
          ? JSON.stringify(value) 
          : value
        );
      }
    });

    const response = await createNewGig(formData, toastId);

    console.log(response);
    
    dispatch(changeLoadingState(false));
    
    navigate("/myGigs");
    
    dispatch(setCurrentStep(1));
  };

  const stepComponents = [
    <NewGigForm
      key="step1"
      register={register}
      setValue={setValue}
      errors={errors}
      getValues={getValues}
      control={control}
      removeKeyword={removeKeyword}
      removeImages={removeImages}
      removeCoverPicture={removeCoverPicture}
      appendKeyword={appendKeyword}
    />,
    <NewGigServices
      key="step2"
      register={register}
      errors={errors}
      control={control}
      getValues={getValues}
      remove={removeFeatures}
      append={appendFeatures}
    />,
    <PublishGigPopup key="step3" getValues={getValues} />,
  ];

  useEffect(() => {
    ;( 
      async() => {

        if(!gigId) return ;        
        const response = await newRequest('get', SINGLE_GIG(gigId));
        
        const {
          title,
          description,
          keywords,
          coverPicture,
          images,
          category,
          services : {
            serviceTitle,
            serviceDescription,
            price,
            deliveryTime,
            revisions,
            features,
          }
        } = response?.data;
        
        const prefieldData = {
          title,
          description,
          keywords,
          coverPicture,
          images,
          category,
          services : {
            serviceTitle,
            serviceDescription,
            price,
            deliveryTime,
            revisions,
            features,
          }
        }

        setDefaultData(prefieldData)
      }

    )()
  },[])

  return (
    <div className="border-2 border-gray-200 rounded-lg p-6 shadow-xl">
      <form onSubmit={handleSubmit(handleCreateNewGig)}>
        {stepComponents[currentStep - 1]}
      </form>
      {currentStep !== 3 && (
        <div className="flex gap-2 py-8">
          <StepButton
            label="Previous"
            disabled={currentStep === 1}
            onClick={() => handleNextStep(currentStep - 1)}
            iconLeft={<FaArrowLeftLong />}
          />
          <StepButton
            label="Next"
            disabled={currentStep === 3}
            onClick={() => handleNextStep(currentStep + 1)}
            iconRight={<FaArrowRightLong />}
          />
        </div>
      )}
    </div>
  );
};

export default NewGigMultistepForm;
