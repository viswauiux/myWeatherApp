import React from 'react'
import SearchInput from './Features/SearchInput'
import WeatherCard from './Features/WeatherCard'

function PhoneLayout() {
  return (
    <div className='phone-layout'>
      <SearchInput></SearchInput>
      <WeatherCard></WeatherCard>
      {/* <WeatherCard></WeatherCard> */}
      <div className='credits'>App Designed and created by <b>Viswa Kiran Kathi</b></div>
    </div>
  )
}

export default PhoneLayout