import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { RiSpeakLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import StarRating from "../ui/StarRating";
import { FiMessageCircle } from "react-icons/fi";
import { dummyUserInfo } from "../../mocks/data";

const UserProfileCard = ({ data, ratingDetail }) => {

  const [showMore, setShowMore] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const { profile, name, skills, location, language, headline, bio } = userInfo;

  useEffect(() => {
    if(!data.id) data = dummyUserInfo; // set dummy user for test
    setUserInfo(data);
  }, []);

  if (!userInfo?.name) return;

  const rating = ratingDetail || {};
  // return;
  return (
    <div className="my-3 border-gray-400 rounded-md py-6">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={profile}
          alt={name}
          className="md:w-32 w-24 aspect-square rounded-full"
        />
        <div>
          <Link to={`/${name}`} className="flex gap-2">
            <span className="text-xl font-semibold text-blue-900 underline-offset-2 hover:underline">
              {name || "unknown"}
            </span>
          </Link>

          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <StarRating
              size={"w-4 h-4"}
              star={rating?.star}
              ratingCount={rating?.ratingCount}
              className={{ rating: "!text-base", ratingCount: "!text-base" }}
            />
          </div>
          <div className="flex items-center gap-3">
            <span>
              <SlLocationPin className="inline-block mr-1 text-blue-950" />
              {location}
            </span>
            <span>
              <FiMessageCircle className="inline-block mr-1 text-blue-950" />I
              speak {language}.
            </span>
          </div>
          <button className="active:scale-95 w-fit border border-blue-900 text-blue-900 font-semibold py-1 px-4 rounded-md hover:border-blue-600 hover:text-blue-600 transition my-4">
            Contact me
          </button>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {headline}
      </h3>
      <p className="text-base text-gray-600 mb-2">
        {showMore ? bio : bio.slice(0, 200).concat("...")}
      </p>
      <button
        className="text-blue-700 font-medium underline"
        onClick={() => setShowMore(!showMore)}
      >
        {!showMore ? "Read More" : "Show Less"}
      </button>

      <div className="flex flex-wrap gap-2 mt-8">
        {skills.map((tag, index) => 
          <span
            className="text-base capitalize bg-gray-200 text-gray-900 py-1 px-3 rounded-full"
            key={index}
          >
            {tag}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
