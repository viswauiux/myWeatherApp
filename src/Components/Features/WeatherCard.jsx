import React from "react";
import { useSelector } from "react-redux";

function WeatherCard() {
  const {weather} = useSelector((state) => state.currentWeather);
  return (
    <>
      {weather && (
        <div className="weather-card">
          <div className="main-weather">
            <div className="city-container">
              <div className="cityname">
                {weather.location.name}
              </div>
              <div className="cityInfo">
                ( {weather.location.country}) <br></br>
                {weather.current.last_updated}
                <br></br>
                {weather.current.condition.text}
              </div>
            </div>
            <div className="city-temparature">
              <div className="temp">
                {weather.current.temp_c}{" "}
                <span style={{ fontSize: "24px" }}>°C</span>
              </div>
              <img
                src={`https:${weather.current.condition.icon}`}
                className="weather-image"
                alt=""
              />
            </div>
          </div>
          <div className="more-info-container">
            <div className="more-info">
              <div className="moreinfo1">
                {weather.current.uv}
              </div>
              <div className="more-info-title">UV Index</div>
            </div>
            <div className="more-info">
              <div className="moreinfo1">
                {weather.current.wind_kph}{" "}
                <span style={{ fontSize: "8px" }}>Km/h</span>
              </div>
              <div className="more-info-title">Wind</div>
            </div>
            <div className="more-info">
              <div className="moreinfo1">
                {weather.current.humidity}
              </div>
              <div className="more-info-title">Humidity</div>
            </div>
            <div className="more-info">
              <div className="moreinfo1">
                {weather.current.cloud}
              </div>
              <div className="more-info-title">Cloud</div>
            </div>
            <div className="more-info">
              <div className="moreinfo1">
                {weather.current.feelslike_c}{" "}
                <span style={{ fontSize: "12px" }}>°C</span>
              </div>
              <div className="more-info-title">Feels Like</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WeatherCard;
