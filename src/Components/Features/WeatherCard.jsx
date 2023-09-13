import React from 'react'

function WeatherCard({data}) {
    console.log(data);
   
  return (
    <>
    

    <div className='weather-card'>
        <div className="main-weather">
        <div className="city-container">
            <div className="cityname">{data.location.name}</div>
            <div className="cityInfo">
          ( {data.location.country}) <br></br>
          {data.current.last_updated}<br></br>
          {data.current.condition.text}
           
            </div>
        </div>
        <div className="city-temparature">
            <img src={`https:${data.current.condition.icon}`} className='weather-image' alt="" />
            <div className="temp">{data.current.temp_c} <span style={{fontSize:"24px"}}>°C</span></div>
        </div>
        </div>
        <div className="more-info-container">
        <div className="more-info">
            <div className="moreinfo1">{data.current.uv}</div>
            <div className="more-info-title">UV Index</div>
        </div>
        <div className="more-info">
            <div className="moreinfo1">{data.current.wind_kph} <span style={{fontSize:"10px"}}>Km/h</span></div>
            <div className="more-info-title">Wind</div>
        </div>
        <div className="more-info">
            <div className="moreinfo1">{data.current.humidity}</div>
            <div className="more-info-title">Humidity</div>
        </div>
        <div className="more-info">
            <div className="moreinfo1">{data.current.cloud}</div>
            <div className="more-info-title">Cloud</div>
        </div>
        <div className="more-info">
            <div className="moreinfo1">{data.current.feelslike_c} <span style={{fontSize:"12px"}}>°C</span></div>
            <div className="more-info-title">Feels Like</div>
        </div>

        </div>
    </div>
    </>
    
  )
}

export default WeatherCard