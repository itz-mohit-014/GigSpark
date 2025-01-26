import ApiError from "../utils/ApiError.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyToken = AsyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken?.split("Bearer ")[1] ||
      req.header("Authorization")?.split("Bearer ")[1];

    if (!token) throw new ApiError(401, "Unauthorized request");

    const decodeUserFromToken = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    const user = await User.findById(decodeUserFromToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) throw new ApiError(401, "Invalid Access Token");
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, error.message || "Invalid Access Token");
  }
});


export const isVerifiedEmail = AsyncHandler(async(req, res) => {
  const { email } = req.user;

  if(!email) throw new ApiError(401, "Email is not verified, YET!! 🫠");

  next();

});

export const googleAuthVerifier = async (accessToken, refreshToken, profile, done) => {
  try {

    let user = await User.findOne({ email: profile.emails[0].value});
    
    if (!user) {
    
      user = await User.create({
        firstName: profile?.name?.givenName,
        lastName: profile?.name?.familyName,
        email: profile.emails[0].value,
        password: `${profile.emails[0]?.value}${profile.id}`,
        isVerified:profile.emails[0].verified,
        profile:{
          public_id:profile?.id,
          url:profile?.photos?.[0].value
        }
      });
    
    }

    return done(null, user);
  } catch (err) {
    console.log(err)
    return done(err, null);
  }
}