// React
import React from "react";

// React ticker
import Ticker from "react-ticker";

// Material-ui
import MusicNoteIcon from "@material-ui/icons/MusicNote";

// CSS
import "./VideoFooter.css";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <MusicNoteIcon className="videoFooter__icon" />

        <div className="videoFooter__ticker">
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>

      <img
        className="videoFooter__img"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
