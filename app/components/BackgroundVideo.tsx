import React from "react";

interface Props {
  source: string;
}

const BackgroundVideo = ({ source }: Props) => {
  return (
    <>
      <video
        autoPlay
        muted
        playsInline
        loop
        id="backgroundVideo"
        className="fixed bottom-0 right-0 min-w-full min-h-full -z-20 object-cover"
      >
        <source src={source} type="video/mp4" />
      </video>
    </>
  );
};

export default BackgroundVideo;
