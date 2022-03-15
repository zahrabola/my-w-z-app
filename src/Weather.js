import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  function showTemperature(response) {
    console.log(response.data);
    setWeatherdata({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      sunrise: response.data.sys.sunrise * 1000,
      sunset: response.data.sys.sunset * 1000,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherdata.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="info" id="Titles">
            <p>Zahra's Weather App</p>
            <h2>{weatherdata.city}</h2>
            <h5>Tuesday 10:00</h5>
            <h2>{Math.round(weatherdata.temperature)} °C </h2>
            image
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
              Feels Like:{weatherdata.feels_like}
            </div>
            <div class="col-md-4 info-text  border">
              Sunrise:{weatherdata.sunrise * 1000} am
            </div>
            <div class="col-md-4  info-text border">
              Sunset:{weatherdata.sunset * 1000}pm
            </div>
          </div>
          <div className="row">
            <div class="col-md-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
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
        </div>
      </div>
    );
  } else {
    let apiKey = "a007f377631f64e3ca30e980828384a8";
    let units = "metric";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
  return "Please wait - loading... ";
}
