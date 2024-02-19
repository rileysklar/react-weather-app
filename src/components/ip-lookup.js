import React, { useEffect, useState } from "react";
import "../App.css";

const IpLookupComponent = () => {
  const [countryName, setCountryName] = useState(""); // Initialize state to hold the country code
  const [regionName, setRegionName] = useState(""); // Initialize state to hold the region name
  const [cityName, setCityName] = useState(""); // Initialize state to hold the city name

  useEffect(() => {
    const apiUrl = "https://freeipapi.com/api/json"; //

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          `Your location is ${data.cityName}, ${data.regionName}, ${data.countryName}`
        );
        setCountryName(data.countryName);
        setRegionName(data.regionName);
        setCityName(data.cityName);
      })
      .catch((error) => console.error("Error fetching IP info:", error));
  }, []);

  return (
    <div className="ip-lookup">
      {countryName && regionName && cityName && (
        <div>
          <p>
            Thank you for visiting the React Weather App. Your location is
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                cityName
              )},+${encodeURIComponent(regionName)},+${encodeURIComponent(
                countryName
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {cityName}, {regionName}, {countryName}
            </a>
            .
          </p>
          <p>
            Built by <a href="https://rileysklar.io">Riley Sklar</a> in Austin,
            TX 💻{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default IpLookupComponent;
