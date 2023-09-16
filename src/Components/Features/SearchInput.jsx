import React, { useEffect, useRef, useState } from "react";
import { useGetCityWeatherQuery } from "../services/weatherApi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setWeather } from "./mySlice/weatherSlice";
import useDebounce from "../../CustonHooks/useDebounce";

function SearchInput() {
  const [dynamicInp, setDynamicInp] = useState();
  const [localCity, setLocalCity] = useState();
  const inpRef = useRef();
  const [fetchedcities, setFetchedCities] = useState();
  const { data } = useGetCityWeatherQuery(localCity);
  const dispatch = useDispatch()

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
     console.log("Geolocation is not supported by this browser.")
    }
  }
  
  function showPosition(position) {
    setLocalCity( position.coords.latitude + 
    "," + position.coords.longitude)
  }
  if(!localCity){getLocation()}
  

 
  let updatedDebounce =  useDebounce((text) => setDynamicInp(text),300);



  function searchCity() {
    setLocalCity(inpRef.current.value);
    setFetchedCities("");
  }
  function searchOnChangeHadler(e) {
    if (inpRef.current.value.length > 3) {
      updatedDebounce(e.target.value);
    } else if (inpRef.current.value.length < 3) {
      setFetchedCities("");
    }
  }


  useEffect(()=>{ if(data){dispatch(setWeather(data))}})
  useEffect(() => {
    if (dynamicInp) {
      async function call() {
        const options = {
          method: "GET",
          url: "https://weatherapi-com.p.rapidapi.com/search.json",
          params: { q: dynamicInp },
          headers: {
            "X-RapidAPI-Key":
              "0c3380c8dfmshddbc8bfa6edf74dp181c0bjsn60a653429462",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        };
        try {
          await axios
            .request(options)
            .then((data) => {setFetchedCities(data.data)});
        } catch (err) {
          console.log(err);
        }
      }
      call();
    }
  }, [dynamicInp]);
   
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          ref={inpRef}
          onChange={searchOnChangeHadler}
          placeholder="Enter your city name"
        />
        <button className="search-btn" onClick={searchCity}>
          Search
        </button>
          {fetchedcities&&fetchedcities.length>0&&<>
          
        <div className="suggetionbox">
          { 
            fetchedcities.map((item) => {
              
              return (
                <div
                  key={Math.random()}
                  className="suggetionbox-btn"
                  onClick={() => {
                    inpRef.current.value = item.name;
                    setLocalCity(`${item.name} ${item.region}`)
                    setFetchedCities("");
                  }}
                >{`${item.name}, ${item.region}, ${item.country}`}</div>
              );
            })}
        </div>
          </>}
      </div>
      
    </>
  );
}

export default SearchInput;
