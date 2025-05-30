import { Router } from "express";
import {
  addNewGig,
  deleteGig,
  deleteImageFromGig,
  getGigDetails,
  updateGigDetails,
  updateGigImages,
  updateGigServicesDetails,
  getAllGigs
} from "../controllers/gig.controller.js";
import { isVerifiedEmail, verifyToken } from "../middleware/auth.middleware.js";
import { Upload } from "../middleware/multer.js";

export const gigRoutes = Router();

gigRoutes.route("/").get(verifyToken, getAllGigs)

gigRoutes
  .route("/:id")
  .get(getGigDetails)
  .delete(verifyToken, isVerifiedEmail, deleteGig)
  .patch(verifyToken, isVerifiedEmail, updateGigDetails);

gigRoutes
  .route("/:id/update-services")
  .patch(verifyToken, isVerifiedEmail, updateGigServicesDetails);
  
gigRoutes
  .route("/:id/:imageId")
  .delete(verifyToken, isVerifiedEmail, deleteImageFromGig);
  
gigRoutes.route("/:id/update-images").patch(
  verifyToken,
  isVerifiedEmail,
  Upload.fields([
    {
      name: "coverPicture",
      maxCount: 1,
    },
    {
      name: "images",
      maxCount: 5,
    },
  ]),
  updateGigImages
);

gigRoutes.route("/add-new-gig").post(
  verifyToken,
  isVerifiedEmail,
  Upload.fields([
    {
      name: "coverPicture",
      maxCount: 1,
    },
    {
      name: "images",
      maxCount: 5,
    },
  ]),
  addNewGig
);