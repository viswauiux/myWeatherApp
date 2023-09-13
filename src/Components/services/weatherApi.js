import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

export const { useGetCityWeatherQuery,useLazyGetCityWeatherQuery } = weatherApi