import React from 'react'
import {  useGetCityWeatherQuery } from '../services/weatherApi'

function WeatherCard() {
   
  return (
    <div className='weather-card'>
        <div className="main-weather">
        <div className="city-container">
            <div className="cityname">Hyderabad</div>
            <div className="cityInfo">
            13th Sept, 01:00 PM <br></br>
            Mostly Sunny
            </div>
        </div>
        <div className="city-temparature">
            <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" className='weather-image' alt="" />
            <div className="temp">25° <span style={{fontSize:"34px"}}>C</span></div>
        </div>
        </div>
        <div className="more-info-container">
        <div className="more-info">
            <div className="moreinfo1">6</div>
            <div className="more-info-title">UV Index</div>
        </div>
        <div className="more-info">
            <div className="moreinfo1">15 <span style={{fontSize:"12px"}}>Km/h</span></div>
            <div className="more-info-title">Wind</div>
        </div>
        <div className="more-info">
            <div className="moreinfo1">84</div>
            <div className="more-info-title">Humidity</div>
        </div>
        <div className="more-info">
            <div className="moreinfo1">56</div>
            <div className="more-info-title">Cloud</div>
        </div>
        <div className="more-info">
            <div className="moreinfo1">24 <span style={{fontSize:"12px"}}>°C</span></div>
            <div className="more-info-title">FeelsLike</div>
        </div>

        </div>
    </div>
  )
}

export default WeatherCard