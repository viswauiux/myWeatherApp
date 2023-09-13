// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://weatherapi-com.p.rapidapi.com/current.json' }),
  endpoints: (builder) => ({
    getCityWeather: builder.query({
      query: (params) => ({
        url:`?q=${params}`,
        method:"GET",
        headers: {
            'X-RapidAPI-Key': '0c3380c8dfmshddbc8bfa6edf74dp181c0bjsn60a653429462',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })
    }),
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpointsweatherApi
export const { useGetCityWeatherQuery,useLazyGetCityWeatherQuery } = weatherApi