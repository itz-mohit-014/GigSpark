import toast from "react-hot-toast";
import { Gig } from "../services/api";
import { newRequest } from "../services/newRequest";

const fetchGig = async (id) => {
  const { SINGLE_GIG } = Gig;
  const response = await newRequest("get", SINGLE_GIG(id), null);

  if (typeof response === "string") {
    toast.error(response);
    return;
  }
  
  return response;
};

const createNewGig = async (data) => {
  const { ADD_NEW_GIG } = Gig;
  const response = await newRequest("post", ADD_NEW_GIG, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  
  if (typeof response === "string") {
    toast.error(response);
    return;
  }
  return response;
};

export { fetchGig, createNewGig };
