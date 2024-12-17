import toast from "react-hot-toast";
import {
  changeLoadingState,
  hideAuthenticatePage,
} from "../slices/showLoginForm.slice";
import axios from "axios";
import { deleteCurrentUser, expireSessionTimeout, setCurrentUser, updateSessionTimeout } from "../slices/user.slice";
import {
  getItemsFromLocalStorage,
  removeItemFromLocalstorage,
  setItemsToLocalStorage,
} from "./localStorage";
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
      const tokenExpiry = new Date().getTime() + (24 * 60 * 60 * 1000);
      if (result?.statusCode === 200) {
        dispatch(setCurrentUser(result?.data));
        setItemsToLocalStorage("user", result?.data);
        setItemsToLocalStorage("sessionTimeout", tokenExpiry);
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

const logout = (navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("logging out...");
    try {
      const token = await getItemsFromLocalStorage("token");

      const response = await axios.get(User?.LOGOUT, {
        withCredentials: true,
      });

      const result = response?.data;
      if (result?.statusCode === 200) {
        dispatch(deleteCurrentUser());
        removeItemFromLocalstorage("user");
        removeItemFromLocalstorage("sessionTimeout");
      }
      toast.success(result.message, { id: toastId });
      navigate("/");
    } catch (error) {
      const errMessage = error?.response?.data?.message || error?.message;
      toast.error(errMessage, { id: toastId });
    }
  };
};

const setAndValidateUser = () => {
    return async ( dispatch ) => {
      const currentUser = await getItemsFromLocalStorage("user")
      const sessionTimeout = await getItemsFromLocalStorage("sessionTimeout")

      const currentTime = new Date().getTime();
      if(!currentUser || !sessionTimeout || currentTime > sessionTimeout){
        // expired token
        removeItemFromLocalstorage("user");
        removeItemFromLocalstorage("sessionTimeout");
        dispatch(deleteCurrentUser())
        dispatch(expireSessionTimeout())
      }else{
        dispatch(setCurrentUser(currentUser));
        dispatch(updateSessionTimeout(sessionTimeout));
      }      

    } 
}



export { signin_signup, logout, setAndValidateUser };
