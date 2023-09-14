import React from 'react'
import SearchInput from './Features/SearchInput'

function PhoneLayout() {
  return (
    <div className='phone-layout'>
      <SearchInput></SearchInput>
      {/* <WeatherCard></WeatherCard> */}
      <div style={{justifySelf:"flex-end",fontSize:"12px"}}>App Designed and created by <b>Viswa Kiran Kathi</b></div>
    </div>
  )
}

export default PhoneLayout