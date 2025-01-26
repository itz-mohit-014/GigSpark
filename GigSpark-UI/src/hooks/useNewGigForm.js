import { useFieldArray, useForm } from "react-hook-form";

// Custom Hook for handling new gig form data
export const useNewGigForm = ( defaultValues ) => {
    // console.log(defaultValues , "component re render fill data...")

    const {
      register,
      handleSubmit,
      setValue,
      getValues,
      control,
      formState,
      setError,
      clearErrors,
    } = useForm({
      // defaultValues: defaultValues,
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
  
    // validate and show error if any
    const validateStep = (step, data) => {
      clearErrors();

      if (step === 2 || step === 3) {
        const validateFields = step === 2 ? data : data?.services;
  
        const emptyFields = Object.entries(validateFields).filter(
          ([key, inputValues]) => !inputValues?.length
        );
  
        emptyFields.forEach(([fieldName, value]) =>
          setError(step === 2 ? fieldName : `services.${fieldName}`, {
            type: "manual",
            message: `${fieldName} is required`,
          })
        );
  
        console.log(emptyFields)
        if(step == 2){
            return emptyFields.length > 2; // exclude -: [images , services]
        }else{
            return emptyFields.length !== 0;
        }
      }
  
      return false;
    };
  
    return {
      removeKeyword,
      appendKeyword,
      removeCoverPicture,
      appendCoverPicture,
      removeImages,
      appendImages,
      removeFeatures,
      appendFeatures,
      register,
      handleSubmit,
      setValue,
      getValues,
      control,
      formState,
      validateStep,
    };
  };