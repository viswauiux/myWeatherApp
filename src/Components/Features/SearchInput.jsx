import React, { useEffect, useRef, useState } from "react";
import { useGetCityWeatherQuery } from "../services/weatherApi";
import WeatherCard from "./WeatherCard";
import axios from "axios";

function SearchInput() {
  const [dynamicInp, setDynamicInp] = useState();
  const [localCity, setLocalCity] = useState("hyderabad");
  const inpRef = useRef();
  const [fetchedcities, setFetchedCities] = useState();
  const { data, isLoading } = useGetCityWeatherQuery(localCity);

  let updatedDebounce = debounce((text) => setDynamicInp(text));

  function searchCity(e) {
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
  function debounce(cb, delay = 1000) {
    let timeout;

    return (...arg) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...arg);
      }, delay);
    };
  }

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
            .then((data) => setFetchedCities(data.data));
        } catch (err) {
          console.log(err);
        }
      }
      call();
    }
  }, [dynamicInp]);
  console.log(fetchedcities);
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
                  className="suggetionbox-btn"
                  onClick={() => {
                    inpRef.current.value = item.name;
                    setLocalCity(item.name)
                    setFetchedCities("");
                  }}
                >{`${item.name},${item.region}, ${item.country}`}</div>
              );
            })}
        </div>
          </>}
      </div>

      {!isLoading && <WeatherCard data={data}></WeatherCard>}
    </>
  );
}

export default SearchInput;
