import React from "react";
import weatherIcon from "../weather-icon.png";
import "../App.css";

function Logo() {
  return (
    <div className="logo-container">
      <img src={weatherIcon} alt="Weather Logo" />
      <h1 className="logo-title">
        <strong>React</strong> Weather App
      </h1>
    </div>
  );
}

export default Logo;
