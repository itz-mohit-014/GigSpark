import "./dotenv.js"
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./src/routes/router.js";
import dbConnection from "./src/db/dbConnection.js";
import { cloudinaryConfig } from "./src/utils/cloudinary.js";
import passport from "passport";
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import { googleAuthVerifier } from "./src/middleware/auth.middleware.js";

const app = express();
const port = process.env.PORT;
cloudinaryConfig();

app.use(
  cors({
    origin: process.env.ALLOW_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"))

app.use(passport.initialize());

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
googleAuthVerifier 
))

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

app.use("/api/v1", router);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    status:errorStatus,
    message: errorMessage,
    errors: err.errors || [],
    data: null,
    success: false,
  });
}) 

dbConnection()
  .then(() =>
    app.listen(port, () => {
      console.log(`Server 🚀  is running at localhost: ${port}`);
    })
  )
  .catch((e) => console.log("MONGO db connection failed !!!  ", e));

