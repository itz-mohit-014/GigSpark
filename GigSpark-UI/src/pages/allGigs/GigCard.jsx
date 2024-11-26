import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import StarRating from "../../components/ui/StarRating";
import LikeButton from "../../components/ui/LikeButton";

const GigCard = ({ data }) => {
  if (!data) {
    return <h1>Loading...</h1>;
  }

  const { id, images, user, heading, services, rating } = data;

  return (
    <div className="relative w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {data.isRecommended && (
        <button className="z-10 cursor-auto absolute -top-3 -left-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-medium hover:text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 text-white dark:text-white focus:outline-none">
          <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-100 bg-opacity-0 uppercase">
            GigSpark's <span className="text-yellow-500">Choice</span>
          </span>
        </button>
      )}
      <Link to={`/gig/${id}`} className="relative">
        <img
          className="rounded-t-lg object-cover w-full aspect-video border-4 border-gray-100"
          src={images[0]}
          alt="product image"
        />
        <LikeButton className="absolute top-2 right-2"/>
      </Link>
      <div className="px-4 py-3 pb-5">
        <div className="flex gap-2 items-center justify-between">
          <Link to={`/profile/${user?.username}`} className="flex gap-2 py-2">
            <span>
              <img
                className="rounded-full h-6 w-6"
                src={user?.userProfile}
                alt="product image"
              />
            </span>
            <span className="text-sm font-medium text-blue-900 underline-offset-2 hover:underline">
              {user?.username || "unknown"}
            </span>
          </Link>
        </div>
        <Link to={`/gig/${id}`}>
          <h5 className="text-base font-semibold tracking-tight text-gray-900/60 hover:underline dark:text-white">
            {heading}
          </h5>
        </Link>

        <div>
          <p className="text-lg mb-0.5">
            <span>From: </span>
            <span className="text-2xl font-medium text-gray-900 dark:text-white">
              ${services?.price || 0}
            </span>
          </p>
          <StarRating
            star={rating?.star}
            ratingCount={rating?.ratingCount}
            size={"w-4 h-4"}
          />
        </div>
      </div>
    </div>
  );
};

export default GigCard;
