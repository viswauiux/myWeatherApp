import React from 'react'
import { useGetCityWeatherQuery } from '../services/weatherApi';

function SearchInput() {
  const is =useGetCityWeatherQuery()
  console.log(is);
  return (
    <div className='search-container'>
        <input type="text" placeholder='Enter your city name' /> 
        <button className='search-btn' >Search</button>
    </div>
  )
}

export default SearchInput