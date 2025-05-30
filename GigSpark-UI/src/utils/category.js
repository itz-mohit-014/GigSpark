import toast from "react-hot-toast";
import { Category } from "../services/api";
import { newRequest } from "../services/newRequest";
import { setAllCategory } from "../slices/category.slice";

const fetchAllCategory = () => async (dispatch) => {
  toast.dismiss();
  toast.loading("category loading...");

  const response = await newRequest("get", Category?.GET_ALL_CATEGORY, null);
  if (typeof response === "string") {
    response !== "Network Error"
      ? toast.error(response)
      : toast.error("Please reload the page again");
    return;
  }
  // toast.success(response?.message)
  dispatch(setAllCategory(response?.data));
};

const getCurrentCategoryWithAllGigs = async (id) => {
  const { SINGLE_CATEGORY } = Category;
  toast.dismiss();

  const response = await newRequest("get", SINGLE_CATEGORY(id), null);

  if (typeof response === "string") {
    response !== "Unauthorized request" &&  toast.error(response);
    return;
  }
  toast.success(response?.message);
  return response;
};

const searchCategoryWithKeyword = async (keyword) => {
  const { CATEGORY_BY_KEYWORD } = Category;
  toast.dismiss();

  const response = await newRequest("get", CATEGORY_BY_KEYWORD(keyword), null);

  if (typeof response === "string") {
    response !== "Unauthorized request" &&  toast.error(response);
    return;
  }
  toast.success(response?.message);
  return response;
};

export { fetchAllCategory, getCurrentCategoryWithAllGigs, searchCategoryWithKeyword };
