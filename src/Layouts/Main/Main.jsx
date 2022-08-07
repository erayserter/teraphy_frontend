import React from "react";
import RezervationBar from "../../components/RezervationBar/RezervationBar";

import { images } from "../../constants";

import "./Main.scss";

const Main = (props) => {
  return (
    <main id="home" className="main">
      <video
        className="main__background-video"
        poster={images.background_video_poster}
        autoPlay
        loop
        muted
      >
        <source
          src="blob:https://player.vimeo.com/8e48b67f-1d35-4146-95c4-03bfe7234cae"
          type="video/mp4"
        />
      </video>
      <RezervationBar />
    </main>
  );
};

export default Main;
