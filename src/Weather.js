import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Weathericon from "./Weathericon";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);

  function showTemperature(response) {
    setWeatherdata({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      realFeel: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "94cfe1d2e012b0f247f6295c4ed86fe6";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  if (weatherdata.ready) {
    return (
      <div className="Weather-info">
        <div className="container">
          <div className="info" id="Titles">
            <p>Zahra's Weather App</p>
            <h2 id="cityname"> {weatherdata.city}</h2>

            <h4 className="dateinfo">
              {" "}
              <FormattedDate date={weatherdata.date} />
            </h4>

            <h2 id="temp ">
              <WeatherTemp celsius={weatherdata.temperature} />
            </h2>
            <Weathericon code={weatherdata.icon} />
          </div>

          <div className="row ">
            <div class="col-md-3 info-text ">
              Description: {weatherdata.description}
            </div>
            <div class="col-md-3 info-text ">
              Wind speed: {Math.round(weatherdata.wind)}km/h
            </div>
            <div class="col-md-3 info-text">
              Humidity: {weatherdata.humidity}%
            </div>
            <div class="col-md-3 info-text">
              Feels Like: {Math.round(weatherdata.realFeel)} °C
            </div>

            <WeatherForecast coordinates={weatherdata.coordinates} />
          </div>
          <div className="Weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div class="col-md-9">
                  <input
                    type="search"
                    placeholder="Enter a City..."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div class="col-3">
                  <input
                    type="Submit"
                    value="search"
                    className="btn btn-primary"
                    id="search-btn"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Please wait - loading... ";
  }
}
