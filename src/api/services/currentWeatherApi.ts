import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CurrentWeatherByLocationQueryParameters,
  CurrentWeatherByLocationResponse,
} from 'src/types';
import { CURRENT_WEATHER } from '../cacheTags';

// Define a service using a base URL and expected endpoints
export const currentWeatherApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/' }),
  tagTypes: [CURRENT_WEATHER],
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
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentWeatherByLocationQuery } = currentWeatherApi;
