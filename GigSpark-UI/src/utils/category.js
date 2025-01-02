import toast from "react-hot-toast";
import { Category } from "../services/api";
import { newRequest } from "../services/newRequest";
import { setAllCategory } from "../slices/category.slice";


const fetchAllCategory = () => async (dispatch) => {
    const firstToastId = toast.loading("category loading...")
    const response = await newRequest("get", Category?.GET_ALL_CATEGORY, null);
    if (typeof response === "string") {
     (response !== "Unauthorized request" && toast.error(response , {id: firstToastId}));
      return;
    }
    toast.success(response?.message, {id: firstToastId})
    dispatch(setAllCategory(response?.data))
  };

const getCurrentCategoryWithAllGigs = async (id) => {
    const { SINGLE_CATEGORY } = Category;
    const response = await newRequest("get", SINGLE_CATEGORY(id), null);
    
    if (typeof response === "string") {
      (response  !== "Unauthorized request" &&  toast.error(response));
      return;
    }
    toast.success(response?.message)
    return response
}

  export {
    fetchAllCategory,
    getCurrentCategoryWithAllGigs,
  }