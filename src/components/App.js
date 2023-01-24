import React, { useState } from "react";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnlikeButton";
import HideCommentsButton from "./HideCommentsButton";

import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);
  const [videoInfo, setVideoInfo] = useState(true);


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <LikeButton upvotes={videoInfo.upvotes} />

      <UnlikeButton />

      <HideCommentsButton />
    </div>

  );
}

export default App;
