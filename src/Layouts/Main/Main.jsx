import React from "react";

import { images } from "../../constants";
import DatePicker from "../../UI/InputComponents/DatePicker/DatePicker";

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
      <div className="main__reservation-container app__flex">
        <div className="reservation__check-in-date">
          <DatePicker placeholder="CHECK-IN" />
        </div>
        <div className="reservation__check-out-date">
          <DatePicker placeholder="CHECK-OUT" />
        </div>
      </div>
    </main>
  );
};

export default Main;
