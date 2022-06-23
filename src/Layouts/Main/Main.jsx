import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { images } from "../../constants";

import "./Main.scss";

const Main = (props) => {
  const [enterDate, setEnterDate] = useState();

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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={enterDate}
            onChange={(newDate) => {
              setEnterDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        {/* <button></button>
        <button></button> */}
      </div>
    </main>
  );
};

export default Main;
