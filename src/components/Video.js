// React
import React, { useRef, useState } from "react";

// Components
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

// CSS
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        src="http://techslides.com/demos/sample-videos/small.ogv"
        loop
        ref={videoRef}
        onClick={handleVideoPlay}
      />

      <VideoFooter channel="ownit" description="description" song="song" />
      <VideoSidebar likes={300} messages={200} shares={100} />
    </div>
  );
}

export default Video;
