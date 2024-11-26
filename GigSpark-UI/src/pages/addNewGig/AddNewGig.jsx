"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaSitemap } from "react-icons/fa";

export default function AddNewGig() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="sm:p-6 pt-0 bg-white dark:bg-black">
      <div className="max-w-screen-xl mx-auto p-4 space-y-4">
        <h1 className="text-xl sm:text-3xl font-medium">
          Add New Gig <FaSitemap className="ml-1.5 mb-1 inline-block" />
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="w-full p-4 md:p-6">
            <form className="" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-3">
                <Label htmlFor="title" className="md:text-lg text-gray-600">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="example@gmail.com"
                  type="text"
                  className="border border-gray-950 py-5 md:text-base bg-gray-50 rounded-sm"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-3">
                <Label htmlFor="category" className="md:text-lg text-gray-600">
                  Selece Category
                </Label>
                <SelectCat />
              </LabelInputContainer>

              <LabelInputContainer className="mb-3">
                <Label
                  htmlFor="coverImage"
                  className="md:text-lg text-gray-600"
                >
                  Cover Image
                </Label>
                <Input
                  id="coverImage"
                  placeholder="example@gmail.com"
                  className="border border-gray-950 bg-gray-50 rounded-sm h-full py-2 cursor-pointer"
                  type="file"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-3">
                <Label
                  htmlFor="uploadMultipleImage"
                  className="md:text-lg text-gray-600"
                >
                  Upload Multiple Images
                </Label>
                <Input
                  id="uploadMultipleImage"
                  placeholder="example@gmail.com"
                  type="file"
                  className="border border-gray-950 bg-gray-50 rounded-sm h-full py-2 cursor-pointer"
                  multiple
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-3">
                <Label
                  htmlFor="description"
                  className="md:text-lg text-gray-600"
                >
                  Description
                </Label>
                <textarea
                  id="description"
                  placeholder="Detailed Description"
                  className="min-h-[160px] outline-none focus:ring-1 focus:border-transparent focus:ring-blue-950 max-h-[120px] text-sm w-full rounded-sm border border-gray-950 bg-gray-50 h-fit p-2"
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br mt-8 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Create &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>

          <div className="w-full p-4 md:p-6">
            <form className="" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-3">
                <Label
                  htmlFor="serviceTitle"
                  className="md:text-lg text-gray-600"
                >
                  Service Title
                </Label>
                <Input
                  id="serviceTitle"
                  placeholder="example@gmail.com"
                  type="text"
                  className="border border-gray-950 py-5 md:text-base bg-gray-50 rounded-sm"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-3">
                <Label
                  htmlFor="short_Description"
                  className="md:text-lg text-gray-600"
                >
                  Short Description
                </Label>
                <textarea
                  id="short_Description"
                  placeholder="Detailed Description"
                  className="min-h-[100px] outline-none focus:ring-1 focus:border-transparent focus:ring-blue-950 max-h-[120px] text-sm w-full rounded-sm border border-gray-950 bg-gray-50 h-fit p-2"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-3">
                <Label htmlFor="delTime" className="md:text-lg text-gray-600">
                  Delivery Time (e.g. 3 days)
                </Label>
                <Input
                  id="delTime"
                  placeholder="example@gmail.com"
                  className="border border-gray-950 bg-gray-50 rounded-sm h-full py-2 cursor-pointer"
                  type="number"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-3">
                <Label
                  htmlFor="revisionTime"
                  className="md:text-lg text-gray-600"
                >
                  Revision Time
                </Label>
                <Input
                  id="revisionTime"
                  placeholder="example@gmail.com"
                  className="border border-gray-950 bg-gray-50 rounded-sm h-full py-2 cursor-pointer"
                  type="number"
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-3">
                <Label htmlFor="features" className="md:text-lg text-gray-600">
                  Add Features
                </Label>
                <div className="flex gap-1 w-full border *:basis-3/4">
                  <Input
                    id="features"
                    placeholder="e.g. page design"
                    type="text"
                    className="border border-gray-950 bg-gray-50 rounded-sm h-full py-2 cursor-pointer"
                  />
                  <button
                    className="w-24 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] !basis-1/4 active:scale-95 disabled:cursor-not-allowed"
                    type="submit"
                  >
                    Add
                    <BottomGradient />
                  </button>
                </div>
              </LabelInputContainer>

              <LabelInputContainer className="mb-3">
                <Label htmlFor="price" className="md:text-lg text-gray-600">
                  Price
                </Label>
                <Input
                  id="price"
                  placeholder=""
                  type="number"
                  className="border border-gray-950 bg-gray-50 rounded-sm h-full py-2 cursor-pointer"
                />
              </LabelInputContainer>
            </form>
          </div>
        </div>
      </div>
    </section>
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

const SelectCat = () => {
  const catName = ["Web Design", "Ai Artist", "Graphic Design", "Programming"];

  return (
    <select
      name="category"
      id="category"
      className="appearance-none border border-gray-950 p-2 md:text-base bg-gray-50 rounded-sm outline-none"
    >
      {catName.map((category, index) => (
        <option
          className="appearance-none relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50"
          value={category}
          key={index}
        >
          <span className="absolute top-0 right-0 z-30 text-black h-3 w-5 inline-block">
            <FaAngleDown />
          </span>
          {category}
        </option>
      ))}
    </select>
  );
};
