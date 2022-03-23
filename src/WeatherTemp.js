import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [Unit, SetUnit] = useState("celsius");
  function Showfahrenheit(event) {
    event.preventDefault();
    SetUnit("fahrenheit");
  }

  function Showcelsius(event) {
    event.preventDefault();
    SetUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (Unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <h2 id="temp">
          {Math.round(props.celsius)}
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={Showfahrenheit}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <h2 id="temp">
          {Math.round(fahrenheit())}
          <span className="unit">
            <a href="/" onClick={Showcelsius}>
              °C |
            </a>
            {""}
            °F
          </span>
        </h2>
      </div>
    );
  }
}
