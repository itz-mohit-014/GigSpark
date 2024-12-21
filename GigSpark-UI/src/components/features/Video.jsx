import React from "react";

const Video = () => {
  return (
    <div className="space-y-16 max-w-screen-xl  mx-auto">
      <div className="text-center ">
        <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl font-primary mt-16">
          What success on GigSpark looks like
        </h3>
        <p className="mt-2 text-sm sm:text-base">
          Discover key insights to achieve success and thrive on GigSpark.
        </p>
      </div>
      <div className="w-full relative pb-8">
        <p className="text-slate-600 text-sm font-primary pb-2 absolute -bottom-4 left-4 z-[1] ">
          Video source from youtube -
          <a href="https://www.youtube.com/@whatastory" className="font-semibold underline underline-offset-4">
            {" "}
            @whatastory
          </a>
        </p>
        <div className="rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-slate-700 to-slate-400">
          <video
            className="aspect-video"
            controls
            width={"100%"}
            height="100%"
            autoPlay
            muted
            loop
          >
            <source src={"./img/feature-video.mkv"} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos. 🫠
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
