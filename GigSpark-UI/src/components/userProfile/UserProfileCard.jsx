import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SlLocationPin } from "react-icons/sl";
import StarRating from "../ui/StarRating";
import { FiMessageCircle } from "react-icons/fi";

const UserProfileCard = ({ data, rating }) => {
  const [showMore, setShowMore] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!data) return;
    setUserInfo(data);
  }, []);

  if (!userInfo) return;

  const {
    profile,
    firstName,
    lastName,
    skills,
    location,
    language,
    headline,
    bio,
  } = userInfo;

  const fullName = `${firstName} ${lastName}`;
  return (
    <div className="my-3 border-gray-400 rounded-md py-6">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={profile?.url}
          alt={fullName}
          className="md:w-32 w-24 aspect-square rounded-full"
        />
        <div>
          <Link to={`/profile/${userInfo?._id}`} className="flex gap-2">
            <span className="text-xl font-semibold text-blue-900 underline-offset-2 hover:underline">
              {fullName || "unknown"}
            </span>
          </Link>

          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <StarRating
              size={"w-4 h-4"}
              star={rating?.starNumber}
              ratingCount={rating?.totalStar}
              className={{ rating: "!text-base", ratingCount: "!text-base" }}
            />
          </div>
          <div className="flex items-center gap-3">
            {location && (
              <span>
                {" "}
                <SlLocationPin className="inline-block mr-1 text-blue-950" />
                {location}
              </span>
            )}
            {language.length > 0 && (
              <span>
                <FiMessageCircle className="inline-block mr-1 text-blue-950" />I
                speak {language}.
              </span>
            )}
          </div>
          <button className="active:scale-95 w-fit border border-blue-900 text-blue-900 font-semibold py-1 px-4 rounded-md hover:border-blue-600 hover:text-blue-600 transition my-4">
            Contact me
          </button>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">{headline}</h3>
      {bio && (
        <>
          <p className="text-base text-gray-600 mb-2">
            {showMore ? bio : bio?.slice(0, 200).concat("...")}
          </p>
          <button
            className="text-blue-700 font-medium underline"
            onClick={() => setShowMore(!showMore)}
          >
            {!showMore ? "Read More" : "Show Less"}
          </button>
        </>
      )}

      <div className="flex flex-wrap gap-2 mt-8">
        {skills.map((tag, index) => (
          <span
            className="text-base capitalize bg-gray-200 text-gray-900 py-1 px-3 rounded-full"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserProfileCard;
