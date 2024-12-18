import axios from "axios";

const axiosInstence = axios.create({
  withCredentials:true
})

export const newRequest = async (method, url, data, options="") => {
  try {
    const response = await axiosInstence[method](url, data, options);
    if (response?.status) return response?.data;
  } catch (error) {
    console.log(error)
    const errMessage = error?.response?.data?.message || error?.message;
    return errMessage;
  }
};
