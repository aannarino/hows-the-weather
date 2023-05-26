import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import type {
  CurrentWeatherByCityQueryParameters,
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
    getCurrentWeatherByCity: builder.query<
      CurrentWeatherByLocationResponse,
      CurrentWeatherByCityQueryParameters
    >({
      async queryFn(params, _queryApi, _extraOptions, fetchWithBQ) {
        const {
          city,
          appid,
          limit = 1,
          mode = null,
          units = 'metric',
          lang = 'en',
        } = params;
        const locationResult = await fetchWithBQ(
          `geo/1.0/direct?q=${city}&limit=${limit}&appid=${appid}`
        );

        if (locationResult.error) {
          return { error: locationResult.error as FetchBaseQueryError };
        }

        const allLocations = locationResult.data as Array<GeocodingResponse>;
        const location = allLocations[0];
        console.log(location);
        const result = await fetchWithBQ(
          `data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${appid}&mode=${mode}&units=${units}&lang=${lang}`
        );
        return result.data
          ? { data: result.data as CurrentWeatherByLocationResponse }
          : { error: result.error as FetchBaseQueryError };
      },
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
  useGetCurrentWeatherByCityQuery,
  useGetGeocodingLocationQuery,
} = openWeatherAPI;
