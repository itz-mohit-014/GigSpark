import React from "react";

const UserShortProfileCard = ({ user }) => {
  return (
    <div className="sticky bottom-5 left-0 flex items-center p-2 my-3 mt-10 shadow-xl bg-white rounded-full max-w-fit">
      <div className="w-12 h-12 mr-4">
        <img
          src={user?.userProfile}
          alt="Profile"
          className="w-full h-full rounded-full mr-4 object-cover"
        />
        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
      </div>
      <div className="pr-5">
          <h2 className="text-lg font-semibold">Message {user.username}</h2>
          <span className="text-sm text-gray-600">Avg. response time: 1 Hour</span>
      </div>
    </div>
  );
};

export default UserShortProfileCard;
