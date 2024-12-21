import React, { useEffect, useState } from "react";
import { newRequest } from "../../services/newRequest";
import { User } from "../../services/api";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { FaUser } from "react-icons/fa6";

const ProfilePage = () => {
  const { userId } = useParams();

  const [userDetails, setUserDetails] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const fetchUserDetails = async () => {
    const { VIEW_USER_PROFILE } = User;
    const response = await newRequest("get", VIEW_USER_PROFILE(userId), null);

    if (typeof response === "string") {
      toast.error(response);
    }

    if (response?.success) {
      toast.success(response?.message);
      setUserDetails(response?.data);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!userDetails) return;

  console.log(userDetails);

  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">22</p>
              <p className="text-gray-400">Friends</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Photos</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Comments</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full overflow-hidden shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              {!userDetails?.profile?.url ? (
                <FaUser className="h-24 w-24" />
              ) : (
                <img
                  src={userDetails?.profile?.url}
                  alt=""
                  className="object-cover h-full w-full"
                />
              )}
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Connect
            </button>
            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Message
            </button>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700 capitalize">
            {userDetails?.firstName} {userDetails?.lastName}
          </h1>
          <p className=" text-gray-600 mt-3 font-normal capitalize">
            {userDetails?.location}
          </p>
          {userDetails?.language && (
            <p className=" text-gray-500">
              <span className="font-semibold">Language: </span>
              {userDetails?.language.join(", ")}
            </p>
          )}

          { userDetails?.skills.length > 0 && (
            <p className=" mt-3 text-gray-500">
              <span className="font-semibold">Skills: </span>
              {userDetails?.skills.join(", ")}
            </p>
          )}

        </div>
        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-medium lg:px-16 text-xl mb-3">
            {userDetails?.heading}
          </p>

          <div className="overflow-hidden">
            <p
              className={`text-gray-600 text-center font-light lg:px-16 ${
                showMore ? "h-auto" : "h-5"
              }`}
            >
              {userDetails?.bio}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              esse deserunt maxime voluptatem odit, sequi officiis quibusdam quo
              fuga accusantium, aliquam repellendus aliquid autem praesentium
              ducimus expedita amet atque vel? Error necessitatibus eos quas
              quod dicta nam quis itaque, atque quibusdam repellat porro iure
              cumque. Possimus sint animi ad autem nostrum repellat quia, iure
              culpa omnis sunt ipsa nobis excepturi facere tempore voluptates
              nesciunt aspernatur deleniti? Mollitia ad dicta, iste magni iusto
              vero, atque aliquam, autem sunt ipsam eius inventore optio itaque
              excepturi assumenda? Quibusdam, voluptatum! Molestias hic tempora
              voluptate, obcaecati consequuntur placeat beatae neque pariatur
              soluta. Deserunt, velit! Sint!
            </p>
            <div
              className={`w-full h-20 rounded-md bg-gradient-to-b from-white to-gray-950/80 ${
                showMore ? "hidden" : "block"
              }`}
            ></div>
          </div>
          <button
            className="text-indigo-500 py-2 px-4  font-medium mt-4"
            onClick={() => setShowMore(!showMore)}
          >
            {!showMore ? "Show more" : "Hide"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
