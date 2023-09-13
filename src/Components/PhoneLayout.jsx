import React from 'react'
import SearchInput from './Features/SearchInput'
import WeatherCard from './Features/WeatherCard'

function PhoneLayout() {
  return (
    <div className='phone-layout'>
      <SearchInput></SearchInput>
      <WeatherCard></WeatherCard>
    </div>
  )
}

export default PhoneLayout