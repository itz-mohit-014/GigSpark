import React from "react";
import Video from "../../components/ui/video";

const BecomeA_Selller = () => {
  return (
    <section className="bg-inherit">
      <div className="bg-black w-full h-screen fixed top-0 left-0 z-[-1]">
        <Video src={"./video/GigSpark-Become-seller.mp4"} className="h-full w-full object-cover" controls={false} />
      </div>

      <div className="font-secondary relative z-[1] bg-gradient-to-b from-transparent to-gray-800">
        <div className="max-w-screen-xl min-h-[calc(100dvh-120px)] mx-auto p-4 sm:p-6 text-white w-full relative">
          <div className="text-center flex flex-col items-center justify-center sm:gap-4 absolute top-0 left-0 h-full w-full">
            <h1 className="text-4xl sm:text-5xl font-bold">Work Your Way</h1>
            <p className="text-lg sm:text-2xl">
              You bring the skill. We'll make earning easy.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-8 py-2.5 px-8 rounded">
              Become a Seller
            </button>
          </div>
          <div className="absolute border top-[100%] sm:top-auto sm:bottom-0 left-0 w-full py-6">
            <div className="flex items-center justify-center gap-12 max-sm:flex-col">
              <div className="flex-1 px-6 flex flex-col items-center justify-center">
                <p className="text-gray-50 text-base md:text-xl xl:text-2xl text-center">
                  A Gig is Bought Every
                </p>
                <p className="text-2xl md:text-3xl xl:text-5xl">4 SEC</p>
              </div>
              <div className="flex-1 px-6 flex flex-col items-center justify-center">
                <p className="text-gray-50 text-base md:text-xl xl:text-2xl text-center">
                  Transactions
                </p>
                <p className="text-2xl md:text-3xl xl:text-5xl">50M+</p>
              </div>
              <div className="flex-1 px-6 flex flex-col items-center justify-center">
                <p className="text-gray-50 text-base md:text-xl xl:text-2xl text-center">
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
          <div className="max-sm:pt-72 py-12 bg-white">
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

          <div className="py-12 bg-gray-100">
            <h2 className="text-center text-3xl font-bold mb-6">Q&A</h2>
            <div className="max-w-4xl mx-auto">
              <div className="border-b py-4">
                <button className="w-full text-left font-semibold">
                  What can I sell?
                </button>
              </div>
              <div className="border-b py-4">
                <button className="w-full text-left font-semibold">
                  How much money can I make?
                </button>
              </div>
              <div className="border-b py-4">
                <button className="w-full text-left font-semibold">
                  How much does it cost?
                </button>
              </div>
              <div className="border-b py-4">
                <button className="w-full text-left font-semibold">
                  How do I get paid?
                </button>
              </div>
            </div>
          </div>

          <div className="bg-green-500 py-8 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              Sign up and create your first Gig today
            </h2>
            <button className="bg-white text-green-500 font-semibold py-2 px-6 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeA_Selller;
