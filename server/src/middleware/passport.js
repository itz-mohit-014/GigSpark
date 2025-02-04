import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleAuthVerifier } from "./auth.middleware.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    googleAuthVerifier
  )
);
