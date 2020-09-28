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
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
