import type { TemperatureByLocationCardProps } from 'src/components/TemperatureByLocationCard';
import { useGetCurrentWeatherByCityQuery } from 'src/api/services/openWeatherAPI';
import { useError } from 'src/hooks/useError';
import { useEffect } from 'react';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY || '';

export const useFirstLocationCard = (): TemperatureByLocationCardProps => {
  const { error, setError } = useError();
  const defaultCityName = 'No city was found';
  const defaultTemp = 0;

  const {
    data,
    isLoading,
    error: fetchingError,
  } = useGetCurrentWeatherByCityQuery({ city: 'london', appid: weatherApiKey });

  const { name = defaultCityName, main: { temp = defaultTemp } = {} } =
    data || {};

  useEffect(() => {
    if (fetchingError) setError(fetchingError);
  }, [fetchingError]);

  return {
    location: name,
    value: temp,
    unit: 'C',
    prepend: name,
    size: 'md',
    loading: isLoading,
    error,
  };
};
