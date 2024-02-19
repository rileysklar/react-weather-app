import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    data.city
  )}`;

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="weather-link"
      title="Click to visit map"
    >
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
            <p className="weather-description condition">
              {data.weather[0].description}
            </p>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="bottom">
          <p className="temperature">
            {Math.round(data.main.temp)}°C{" "}
            <span className="farenheit condition">
              {Math.round((data.main.temp * 9) / 5 + 32)}°F
            </span>
          </p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label condition">Conditions</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tool-tip">Click to visit {data.city} on the map</div>
    </a>
  );
};

export default CurrentWeather;
