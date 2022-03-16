import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);

  function showTemperature(response) {
    setWeatherdata({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      sunrise: response.data.sys.sunrise * 1000,
      sunset: response.data.sys.sunset * 1000,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
    let apiKey = "a007f377631f64e3ca30e980828384a8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  if (weatherdata.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="info" id="Titles">
            <p>Zahra's Weather App</p>
            <h2 id="cityname"> {weatherdata.city}</h2>

            <h4>
              {" "}
              <FormattedDate date={weatherdata.date} />
            </h4>

            <h2 id="temp">{Math.round(weatherdata.temperature)} °C </h2>
            <img src={weatherdata.icon} />
          </div>

          <div className="row ">
            <div class="col-md-4 info-text border">
              Description: {weatherdata.description}
            </div>
            <div class="col-md-4 info-text  border">
              Wind speed: {Math.round(weatherdata.wind)}km/h
            </div>
            <div class="col-md-4 info-text  border">
              Humidity: {weatherdata.humidity}%:
            </div>
            <div class="col-md-4 info-text border">
              Feels Like:{Math.round(weatherdata.feels_like)}
            </div>
            <div class="col-md-4 info-text  border">
              Sunrise:{weatherdata.sunrise} am
            </div>
            <div class="col-md-4  info-text border">
              Sunset:{weatherdata.sunset}pm
            </div>
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
