import React from "react";
import Accordian from "./Accordian";

const VideoScroller = () => {
  const videos = [
    {
      title: "When The Skin Is ‘Skinning’",
      description: "Description of the video goes here.",
      videoSrc: "/videos/sample-10s.mp4", // Replace with your video source
      thumbnail: "/assets/pricing1.png", // Replace with your video thumbnail
    },
    // Add more videos here as needed
  ];

  return (
    <div className="w-full min-h-screen bg-[#f4dcb4] py-8">
    {/* Stepper Section */}
    <div className="flex justify-start items-center border-b border-gray-300 mb-4 px-4">
      <button className="text-lg text-black font-semibold mr-4 border-b-2 border-yellow-500">
        All
      </button>
      <button className="text-lg text-black font-semibold mr-4">Next Topic</button>
    </div>

    {/* Scroller for videos */}
    <div className="overflow-x-auto flex gap-6 px-4">
      {videos.map((video, index) => (
        <div
          key={index}
          className="flexs w-full "
        >
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden mb-4">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              poster={video.thumbnail}
            >
              <source src={video.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="text-xl text-black font-semibold mb-2">{video.title}</h2>
          <Accordian/>
          {/* <p className="text-gray-600">{video.description}</p> */}
        </div>
      ))}
    </div>
  </div>
  );
};

export default VideoScroller;
