import axios from "axios";

export const newRequest = async (method, url, data, options="") => {
  try {
    const response = await axios[method](url, data, {
      withCredentials: true,
        ...options,
    });

    if (response?.status) return response?.data?.data;
  } catch (error) {
    
    const errMessage = error?.response?.data?.message || error?.message;
    return errMessage;
  }
};
