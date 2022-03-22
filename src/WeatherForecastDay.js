import React from "react";
import Weathericon from "./Weathericon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Weather-Forecast-day">{day()}</div>
      <Weathericon code={props.data.weather[0].icon} size={40} />
      <div className="Weather-Forecast-temp">
        <div className="Weather-Forecast-temp-max">
          {" "}
          Max:{Math.round(props.data[0].temp.max)}°C
        </div>
        <div className="Weather-Forecast-temp-min">
          {" "}
          Min:{Math.round(props.data[0].temp.min)}°C
        </div>
      </div>
    </div>
  );
}
