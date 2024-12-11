import toast from "react-hot-toast";
import {
  changeLoadingState,
  hideAuthenticatePage,
} from "../slices/showLoginForm.slice";
import axios from "axios";
import { deleteCurrentUser, setCurrentUser } from "../slices/user.slice";
import { removeItemFromLocalstorage, setItemsToLocalStorage } from "./localStorage";
import { User } from "./api.js";

const signin_signup = (data, loadingText, requestUrl) => {
  return async (dispatch) => {
    dispatch(changeLoadingState(true));
    const toastId = toast.loading(loadingText);
    try {
      const response = await axios.post(requestUrl, data, {
        withCredentials: true,
      });
      const result = response?.data;
      console.log(result);
      if (result?.statusCode === 200) {
        dispatch(setCurrentUser(result?.data));
        setItemsToLocalStorage("user", result?.data);
        dispatch(hideAuthenticatePage());
      }
      toast.success(result.message, { id: toastId });
      dispatch(changeLoadingState(false));
    } catch (error) {
      console.log(error);
      const errMessage = error?.response?.data?.message || error?.message;
      toast.error(errMessage, { id: toastId });
      dispatch(changeLoadingState(false));
    }
  };
};

// data, loadingText, requestUrl,

const logout = (navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("logging out...");
    try {
      const response = await axios.get(User?.LOGOUT, { withCredentials: true });
      const result = response?.data;
      if (result?.statusCode === 200) {
        dispatch(deleteCurrentUser());
        removeItemFromLocalstorage("user");
      }
      toast.success(result.message, { id: toastId });
      navigate("/");
    } catch (error) {
      const errMessage = error?.response?.data?.message || error?.message;
      toast.error(errMessage, { id: toastId });
    }
  };
};

export { signin_signup, logout };
