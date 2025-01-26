import { Router } from "express";
import {
  signup,
  login,
  logout,
  getUserById,
  updateUser,
  uploadProfile,
  changePassword,
  deleteUser,
  generateUserProfileByName,
  regenerateTokens,
  googleAuthCallback,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js"
import { Upload } from "../middleware/multer.js";
import passport from "passport";

export const userRoutes = Router();

// public routes
userRoutes.route("/signup").post(signup);
userRoutes.route("/login").post(login);

// Google authentication
userRoutes.route("/auth/google")
.get( 
  passport
  .authenticate("google", { scope: ["profile", "email"],  session: false }
));

userRoutes.route("/auth/google/callback")
.get(
  passport
  .authenticate('google', {failureRedirect:"/", session:false}),
  googleAuthCallback
);

// public routes
userRoutes.route("/profileImage?").get(generateUserProfileByName);
userRoutes.route("/regenrate-tokens").post(regenerateTokens);

// private routes
userRoutes.route("/logout").get(verifyToken, logout);
userRoutes.route("/change-password").post(verifyToken, changePassword);
userRoutes.route("/update-profile").post(verifyToken, Upload.single("profile"), uploadProfile);
userRoutes.route("/:id")
.get( getUserById )
.patch(verifyToken, updateUser)
.delete(verifyToken, deleteUser);
