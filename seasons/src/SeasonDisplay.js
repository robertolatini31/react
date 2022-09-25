import React from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
  summer: {
    text: "Andiamo in spiaggia",
    iconName: "sun",
  },
  winter: {
    text: "Brr, che freddo",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season_display ${season}`}>
      <i className={`icon_left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon_right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
