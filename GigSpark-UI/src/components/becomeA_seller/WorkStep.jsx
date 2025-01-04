import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal.jsx";

const WorkStep = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
      <StickyScroll
        content={workStepList}
        heading={
          <h2 className="text-center  text-2xl sm:text-4xl font-secondary font-medium mb-10">
            How it works
          </h2>
        }
      />
    </div>
  );
};

export default WorkStep;

const workStepList = [
  {
    title: "1. Create a Gig",
    description:
      "Sign up for free, set up your Gig, and offer your work to our global audience. Create a detailed and appealing gig description that highlights your skills and attracts potential buyers. Showcase your expertise with an engaging title, eye-catching images, and a clear pricing structure.",
    content: (
      <img
        className="object-cover"
        src={"/img/workStep/createGig.jpeg"}
        alt="gig spark work steps - Create gig"
      />
    ),
  },
  {
    title: "2. Deliver great work",
    description:
      "Get notified when you receive an order and use our efficient system to discuss all the necessary details with your customers. Ensure clear communication, maintain professionalism, and deliver high-quality work that meets or exceeds client expectations to build trust and earn repeat business.",
    content: (
      <img
        className="object-cover"
        src={"/img/workStep/deliverWork.jpg"}
        alt="gig spark work steps - Deliver work"
      />
    ),
  },
  {
    title: "3. Get paid",
    description:
      "Get paid on time, every time. Payments are processed securely and are available for withdrawal as soon as they clear. With our trusted system, you can focus on your work without worrying about delayed or missed payments, giving you peace of mind and financial stability.",
    content: (
      <img
        className="object-cover"
        src={"/img/workStep/getPaid.jpg"}
        alt="gig spark work steps - Get paid"
      />
    ),
  },
];
