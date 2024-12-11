import axios from "axios"

export const newRequest = async (method, url, data) => {
    try {
        const response = await axios[method](url,  data, {withCredentials: true});
        if(response?.status) 
            return response?.data?.data
      } catch (error) {
        const errMessage = error?.response?.data?.message || error?.message;
            return errMessage;
      }
}