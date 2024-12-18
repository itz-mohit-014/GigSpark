import toast from "react-hot-toast";
import { Category } from "../services/api";
import { newRequest } from "../services/newRequest";
import { setAllCategory } from "../slices/category.slice";


const fetchAllCategory = () => async (dispatch) => {
    const response = await newRequest("get", Category?.GET_ALL_CATEGORY, null);
    if (typeof response === "string") {
      toast.error(response);
      return;
    }

    dispatch(setAllCategory(response))
  };

const getCurrentCategoryWithAllGigs = async (id) => {
    const { SINGLE_CATEGORY } = Category;
    const response = await newRequest("get", SINGLE_CATEGORY(id), null);
    
    if (typeof response === "string") {
      toast.error(response);
      return;
    }
    return response
}

  export {
    fetchAllCategory,
    getCurrentCategoryWithAllGigs,
  }