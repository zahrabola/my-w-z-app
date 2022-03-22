import React from "react";
import Weathericon from "./Weathericon";
export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="Weather-Forecast-day">{day()}</div>
      <Weathericon code={props.data.weather[0].icon} size={30} />
      <div className="Weather-Forecast-temp">
        <div className="Weather-Forecast-temp-max">
          {" "}
          Max: {maxTemperature()}
        </div>
        <div className="Weather-Forecast-temp-min">
          {" "}
          Min: {minTemperature()}
        </div>
      </div>
    </div>
  );
}
