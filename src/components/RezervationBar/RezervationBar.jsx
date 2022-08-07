import React from "react";

import DatePicker from "../../UI/InputComponents/DatePicker/DatePicker";

import "./RezervationBar.scss";

const RezervationBar = () => {
  return (
    <div className="rezervationbar app__flex">
      <div className="rezervationbar__check-in-date">
        <DatePicker placeholder="CHECK-IN" />
      </div>
      <div className="reservationbar__check-out-date">
        <DatePicker placeholder="CHECK-OUT" />
      </div>
    </div>
  );
};

export default RezervationBar;
