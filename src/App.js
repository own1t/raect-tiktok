// React
import React from "react";

// Components
import Video from "./components/Video";

// CSS
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="http://techslides.com/demos/sample-videos/small.ogv"
          channel="ownit"
          description="This is TikTok Clone"
          song="Lean On"
          likes={300}
          messages={200}
          shares={100}
        />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
