import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    weather:null
}
export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
  
    setWeather: (state, action) => {
        state.weather=(action.payload)
    },
},
})
 

// Action creators are generated for each case reducer function
export const { setWeather } = currentWeatherSlice.actions

export default currentWeatherSlice.reducer