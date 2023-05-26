import { TemperatureByLocationCardProps } from 'src/components/TemperatureByLocationCard';
import {
  useGetCurrentWeatherByCityQuery,
  useGetCurrentWeatherByLocationQuery,
} from 'src/api/services/openWeatherAPI';
import { useError } from 'src/hooks/useError';
import { useEffect } from 'react';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY || '';

export const useUserLocationCard = (): TemperatureByLocationCardProps => {
  const { error, setError } = useError();
  const defaultCityName = 'No city was found';
  const defaultTemp = 0;

  const {
    data,
    isLoading,
    error: fetchingError,
  } = useGetCurrentWeatherByCityQuery({ city: 'oslo', appid: weatherApiKey });

  const { name = defaultCityName, main: { temp = defaultTemp } = {} } =
    data || {};

  useEffect(() => {
    if (error) setError(fetchingError);
  }, [fetchingError]);

  return {
    location: name,
    value: temp,
    unit: 'C',
    prepend: name,
    loading: isLoading,
    size: 'md',
    error,
  };
};
