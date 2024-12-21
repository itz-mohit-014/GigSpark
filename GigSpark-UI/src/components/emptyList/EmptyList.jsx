import React from "react";

const EmptyList = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] p-4">
      <div className="flex items-center justify-center flex-col text-center gap-2">
        <video
          src="/img/EmptyListAnimation.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-40 aspect-video"
        >
          Your browser does not support the video tag.
        </video>
        <h2 className="text-2xl font-bold text-gray-700 font-primary">
          <span className="text-yellow-500 mr-2 inline-block">Oops!</span>
          No Results Found
        </h2>
        <p className="text-sm text-gray-500 max-w-[500px]">
          No gigs are currently available in this category. Please try searching
          for a different category or check back later
        </p>
      </div>
    </div>
  );
};
export default EmptyList;
