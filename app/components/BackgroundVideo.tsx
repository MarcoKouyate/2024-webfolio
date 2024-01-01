import React from "react";

const BackgroundVideo = () => {
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
        <source
          src="videos/MarcoKouyate_Website_Background.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default BackgroundVideo;
