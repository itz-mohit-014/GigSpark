import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { AiOutlineProject } from "react-icons/ai";

const BusinessFeatures = () => {
  const handleExploreBtn = (e) => {
    console.log(e.target.innerText);
  };

  const items = [
    "Connect to freelancers with proven business experience.",
    "Get matched with the perfect talent by a customer success manager.",
    "Manage teamwork and boost productivity with one powerful workspace",
  ];

  const FeatureIcon = [AiOutlineProject, MdBusinessCenter, FaUserTie];

  return (
    <section className="w-full px-4 sm:px-6">
      <div className="max-w-screen-xl sm:py-10 py-6 sm:px-12 px-8 bg-orange-100 rounded-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="pt-4 space-y-6 relative">
          <span className="font-bold text-xl sm:text-2xl">
            GigSpark <i className="font-normal">business</i>
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium font-primary">
              A business solution design for <i>teams</i>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1">
              Upgrade to a curated experience package with tools and benifits
              dedicated to businesses.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:gap-6">
            {items.map((text, index) => {
              const Icon = FeatureIcon[index];
              return (
                <div className="flex items-center gap-4" key={index}>
                  <Icon className="inline-block h-8 w-8 sm:h-10 sm:w-10 grow-0 shrink-0" />
                  <span className="text-base sm:text-lg">{text}</span>
                </div>
              );
            })}
          </div>
          <button
            onClick={handleExploreBtn}
            className="rounded-md bg-orange-950 hover:bg-orange-950/80 border-none text-blue-50 py-3 px-5 font-medium active:scale-95 text-sm inline-block sm:!mt-16"
          >
            Explore Gigspark Business{" "}
            <IoIosArrowForward className="inline-block h-4 w-4" />
          </button>
        </div>
        <div className="items-center justify-center hidden lg:flex">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt="GigSpark Freelance features"
            className="mix-blend-multiply brightness-125 drop-shadow-[0px_25px_50px_#00000050]"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
