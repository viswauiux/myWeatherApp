import React from 'react'

function SearchInput() {
  return (
    <div className='search-container'>
        <input type="text" placeholder='Enter your city name' /> 
        <button className='search-btn' >Search</button>
    </div>
  )
}

export default SearchInput