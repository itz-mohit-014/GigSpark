import React, { useState } from "react";
import Video from "../../components/video/Video.jsx";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiAedFill } from "react-icons/ri";
import GetStartedBtn from "./GetStartedBtn.jsx";
import { becomeA_Sellerfaqs } from "../../mocks/Faqs.js";
import Faqs from "../../components/faq's/FaqsContainer.jsx";
import { useDispatch } from "react-redux";
import { showAuthenticatePage } from "../../slices/showLoginForm.slice.js";

const BecomeA_Selller = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(showAuthenticatePage("signin"));
  };

  return (
    <section className="bg-inherit">
      <div className="bg-black w-full h-screen fixed top-0 left-0 z-[-1]">
        <Video
          src={"./video/GigSpark-Become-seller.mp4"}
          className="h-full w-full object-cover"
          controls={false}
        />
      </div>

      <div className="font-secondary relative z-[1] bg-gradient-to-b from-transparent to-gray-800 min-h-[calc(100dvh-110px)] text-white w-full">
        <div className="text-center flex items-center justify-center sm:absolute top-0 left-0 min-h-[calc(100dvh-110px)] w-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-4xl sm:text-5xl font-bold">Work Your Way</h1>
            <p className="text-lg sm:text-2xl">
              You bring the skill. We'll make earning easy.
            </p>
            <button
              href="#_"
              className="relative inline-block mt-6 px-4 py-2 font-medium group active:scale-95"
              onClick={handleLogin}
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-md"></span>
              <span className="absolute inset-0 w-full h-full  transition duration-300 ease-out  bg-white border-2 border-black group-hover:bg-black  rounded-md"></span>
              <span className="relative text-black group-hover:text-white">
                Become a seller
              </span>
              <div className="absolute inset-x-0 h-0.5 w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            </button>
          </div>
        </div>

        <div className="sm:absolute bg-white text-black sm:text-gray-50 sm:bg-gray-50/20  sm:top-auto sm:bottom-0 left-0 w-full py-12 sm:py-6">
          <div className="flex items-center justify-center gap-12 max-sm:flex-col">
            <div className="flex-1 px-6 flex items-center justify-center gap-2">
              <BiSolidPurchaseTag className="text-5xl" />
              <div>
                <p className="text-base md:text-xl xl:text-2xl text-center">
                  A Gig is Bought Every
                </p>
                <p className="text-2xl md:text-3xl xl:text-5xl">4 SEC</p>
              </div>
            </div>
            <div className="flex-1 px-6 flex items-center justify-center gap-2">
              <AiOutlineTransaction className="text-5xl" />
              <div>
                <p className="text-base md:text-xl xl:text-2xl text-center">
                  Transactions
                </p>
                <p className="text-2xl md:text-3xl xl:text-5xl">50M+</p>
              </div>
            </div>
            <div className="flex-1 px-6 flex  items-center justify-center gap-2">
              <RiAedFill className="text-5xl" />
              <div>
                <p className="text-base md:text-xl xl:text-2xl text-center">
                  Price Range
                </p>
                <p className="text-2xl md:text-3xl xl:text-5xl">$1 - $10,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto p-4 sm:p-6 font-secondary flex flex-col gap-16 relative z-[1]">
          <div className="py-12 bg-white">
            <h2 className="text-center text-3xl font-bold mb-6">
              Join our growing freelance community
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-full mx-auto mb-4"
                />
                <p className="font-semibold">I am a Designer</p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-full mx-auto mb-4"
                />
                <p className="font-semibold">I am a Developer</p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-full mx-auto mb-4"
                />
                <p className="font-semibold">I am a Writer</p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-full mx-auto mb-4"
                />
                <p className="font-semibold">I am a Musician</p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-full mx-auto mb-4"
                />
                <p className="font-semibold">I am a Voiceover Artist</p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="rounded-full mx-auto mb-4"
                />
                <p className="font-semibold">I am a Social Media Marketer</p>
              </div>
            </div>
          </div>

          <div className="py-12 bg-gray-100">
            <h2 className="text-center text-3xl font-bold mb-6">
              How it works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Step 1"
                  className="mx-auto mb-4"
                />
                <p className="font-semibold">1. Create a Gig</p>
                <p className="text-gray-600 text-sm">
                  Sign up for free, set up your Gig, and offer your work to our
                  global audience.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Step 2"
                  className="mx-auto mb-4"
                />
                <p className="font-semibold">2. Deliver great work</p>
                <p className="text-gray-600 text-sm">
                  Get notified when you get an order and use our system to
                  discuss details with customers.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Step 3"
                  className="mx-auto mb-4"
                />
                <p className="font-semibold">3. Get paid</p>
                <p className="text-gray-600 text-sm">
                  Get paid on time, every time. Payment is available for
                  withdrawal as soon as it clears.
                </p>
              </div>
            </div>
          </div>

          <div className="py-12 bg-white">
            <h2 className="text-center text-3xl font-bold mb-6">
              Buyer stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <p className="text-gray-600">
                  "People love our logo, and we love Fiverr."
                </p>
                <p className="text-sm font-semibold">
                  Jennifer Gorn, CEO of Weloot
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">
                  "Fiverr is an amazing resource for anyone in the startup
                  space."
                </p>
                <p className="text-sm font-semibold">
                  Adam Mashaal, CEO of Mashfeed
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">
                  "There is no way I could have produced anything without
                  Fiverr."
                </p>
                <p className="text-sm font-semibold">
                  Christopher Sunami, Music Producer
                </p>
              </div>
            </div>
          </div>

          <div className="py-12 bg-gray-100 rounded-2xl">
            <h2 className="text-center text-3xl font-bold mb-6">Q&A</h2>
            <div className="max-w-4xl mx-auto">
              <Faqs
                data={becomeA_Sellerfaqs}
                layoutClass="grid grid-cols-2 grid-rows-auto gap-y-4 gap-x-12"
              />
            </div>
          </div>

          <div className="border-2 border-dashed rounded-2xl mb-16 bg-blue-400/60 border-blue-500 py-8 text-center font-primary">
            <h2 className="mb-2 text-4xl">
              Sign up and create your first Gig today
            </h2>
            <p className="text-gray-500 mb-4">
              GigSpark Freelance services at your fingertips
            </p>
            <GetStartedBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeA_Selller;