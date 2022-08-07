import React from "react";

import "./DatePicker.scss";

const DatePicker = ({ placeholder, defaultValue, setValue }) => {
  return (
    <div className="date-picker">
      <button className="date-picker__button">
        <span className="date-picker__header">{placeholder}</span>
        <span className="date-picker__value"></span>
        <span class="material-symbols-outlined">calendar_month</span>
      </button>
    </div>
  );
};

export default DatePicker;
