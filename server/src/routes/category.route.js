import { Router } from "express";
import {
  addNewCategory,
  deleteCategory,
  findCategoriesByKey,
  getAllCategories,
  getSingleCategory,
  updateCategoryDetails,
} from "../controllers/category.controller.js";
import { isVerifiedEmail, verifyToken } from "../middleware/auth.middleware.js";
import { Upload } from "../middleware/multer.js";

const categoryRoutes = Router();

categoryRoutes.route("/").get(getAllCategories);
categoryRoutes.route("/search/:keyword").get(findCategoriesByKey);
categoryRoutes
.route("/:id")
.get(getSingleCategory)
.delete(verifyToken, isVerifiedEmail, deleteCategory)
.patch(verifyToken, isVerifiedEmail, Upload.single("coverPicture"), updateCategoryDetails);
categoryRoutes
.route("/add-new")
.post(verifyToken, isVerifiedEmail, Upload.single("coverPicture"), addNewCategory);

export default categoryRoutes;
