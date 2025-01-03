import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const UserTestimonials = () => {
  return (
    <div className="py-12 bg-slate-300 rounded-2xl">
      <h2 className="text-center text-4xl font-secondary font-medium mb-6">Buyer stories</h2>
      <AnimatedTestimonials autoplay={true} testimonials={userTestimonials} />
    </div>
  );
};

export default UserTestimonials;

const userTestimonials = [
  {
    name: "Sophia Carter",
    quote:
      "GigSpark transformed my business by connecting me with talented professionals. Highly recommended!",
    src: "/img/testimonialsUser/1.jpg",
    designation: "Small Business Owner",
  },
  {
    name: "James Rodriguez",
    quote:
      "The platform is user-friendly, and the freelancers are top-notch. I've completed several projects successfully.",
    src: "/img/testimonialsUser/2.jpg",
  },
  {
    name: "Ava Johnson",
    quote:
      "I love how easy it is to find quality talent on GigSpark. It's a game-changer for startups.",
    src: "/img/testimonialsUser/5.jpg",
    designation: "Startup Founder",
  },
  {
    name: "Liam Anderson",
    quote:
      "As a freelancer, GigSpark has helped me find amazing clients and grow my career.",
    src: "/img/testimonialsUser/3.jpg",
  },
  {
    name: "Mia Thomas",
    quote:
      "Thanks to GigSpark, I completed my dream project within budget and on time.",
    src: "/img/testimonialsUser/4.jpg",
    designation: "Project Manager",
  },
  {
    name: "Ethan White",
    quote:
      "A fantastic platform for both freelancers and businesses to collaborate seamlessly.",
    src: "/img/testimonialsUser/6.jpg",
  },
  {
    name: "Olivia Martin",
    quote:
      "GigSpark is my go-to platform for hiring skilled freelancers. The experience has been phenomenal.",
    src: "/img/testimonialsUser/7.jpg",
    designation: "Marketing Consultant",
  },
  {
    name: "Noah Davis",
    quote:
      "The ease of use and the quality of freelancers make GigSpark stand out from the rest.",
    src: "/img/testimonialsUser/8.jpg",
  },
];
