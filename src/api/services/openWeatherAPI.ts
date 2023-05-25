import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CurrentWeatherByLocationQueryParameters,
  CurrentWeatherByLocationResponse,
  GeocodingQueryParameters,
  GeocodingResponse,
} from 'src/types';
import { CURRENT_WEATHER, GEOCODING_LOCATION } from '../cacheTags';

// Define a service using a base URL and expected endpoints
export const openWeatherAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/' }),
  tagTypes: [CURRENT_WEATHER, GEOCODING_LOCATION],
  endpoints: (builder) => ({
    getCurrentWeatherByLocation: builder.query<
      CurrentWeatherByLocationResponse,
      CurrentWeatherByLocationQueryParameters
    >({
      query: ({
        lat,
        lon,
        appid,
        mode = null,
        units = 'metric',
        lang = 'en',
      }) =>
        `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&mode=${mode}&units=${units}&lang=${lang}`,
      providesTags: [CURRENT_WEATHER],
    }),
    getGeocodingLocation: builder.query<
      GeocodingResponse,
      GeocodingQueryParameters
    >({
      query: ({ q, appid, limit = 1 }) =>
        `geo/1.0/direct?q=${q}&limit=${limit}&appid=${appid}`,
      providesTags: [GEOCODING_LOCATION],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCurrentWeatherByLocationQuery,
  useGetGeocodingLocationQuery,
} = openWeatherAPI;
