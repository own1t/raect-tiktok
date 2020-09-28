// React
import React, { useRef, useState } from "react";

// Components
import VideoFooter from "./VideoFooter";

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

      <VideoFooter />
    </div>
  );
}

export default Video;
