"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none max-md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
        Create your account
      </h2>
      <p className="text-neutral-600 dark:text-neutral-300 mt-1">
        Signing up for GigSpark a 100% free freelance platform.
      </p>
      <form className="my-5" onSubmit={handleSubmit(handleSignUp)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="John"
              type="text"
              {...register("firstname", { required: true })}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Doe"
              type="text"
              {...register("lastname", { required: true })}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="example@gmail.com"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
         
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true, minLength: 8 })}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-1.5 top-5 p-2 px-3 rounded-lg z-10 cursor-pointer text-gray-600"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />
        <button
          className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input  bg-gray-100 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <FcGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Google
          </span>
          <BottomGradient />
        </button>
      </form>
      <p className="text-center font-medium text-gray-500 text-sm font-primary">
        Already have an account?{" "}
        <Link
          to={"/auth/signin"}
          className="font-bold text-gray-700 hover:text-gray-900"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={`relative flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};
