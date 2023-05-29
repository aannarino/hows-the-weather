import type { TemperatureByLocationCardProps } from 'src/components/TemperatureByLocationCard/TemperatureByLocationCard';
import {
  useGetCurrentWeatherByCityQuery,
  useGetCurrentWeatherByLocationQuery,
} from 'src/api/services/openWeatherAPI';
import { useError } from 'src/hooks/useError';
import { useEffect, useState } from 'react';
import {
  GeolocationResponse,
  getCurrentLocation,
} from 'src/utils/currentLocation';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY || '';

export const useUserLocationCard = (): TemperatureByLocationCardProps => {
  const { error, setError } = useError();
  const [geolocationResponse, setGeolocationResponse] =
    useState<GeolocationResponse>();
  const defaultCityName = 'No city was found';
  const defaultTemp = 0;

  useEffect(() => {
    if (!geolocationResponse) {
      getCurrentLocation(setGeolocationResponse);
    }
  }, [geolocationResponse]);

  const {
    data: geolocation,
    isLoading: isLoadingGeolocation = true,
    error: geolocationError,
  } = geolocationResponse || {};

  const {
    data: weather,
    isLoading: isLoadingWeather,
    error: fetchingError,
  } = useGetCurrentWeatherByLocationQuery(
    {
      lat: geolocation?.coords.latitude!,
      lon: geolocation?.coords.longitude!,
      appid: weatherApiKey,
    },
    { skip: !geolocation }
  );

  const { name = defaultCityName, main: { temp = defaultTemp } = {} } =
    weather || {};

  useEffect(() => {
    if (fetchingError) setError(fetchingError);
  }, [fetchingError]);

  useEffect(() => {
    if (geolocationError) setError(geolocationError);
  }, [geolocationError]);

  return {
    location: name,
    value: temp,
    unit: 'C',
    prepend: name,
    loading: isLoadingGeolocation || isLoadingWeather,
    size: 'md',
    error,
  };
};
