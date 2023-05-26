import { AppBar } from 'src/components/AppBar';
import { useNavigate, useParams } from 'react-router-dom';
import { TemperatureOverview } from './components/TemperatureOverview';
import { AdditionalInfoOverview } from './components/AdditionalInfoOverview';
import Grid from '@mui/material/Grid';
import { useGetCurrentWeatherByCityQuery } from 'src/api/services/openWeatherAPI';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY || '';

export const LocationViewPage = () => {
  const navigate = useNavigate();
  const backButtonCB = () => navigate(-1);
  const { city = 'Name could not be found' } = useParams();
  const { data, isLoading, error } = useGetCurrentWeatherByCityQuery({
    city,
    appid: weatherApiKey,
  });

  const highTemp = data?.main.temp_max ?? 0;
  const lowTemp = data?.main.temp_min ?? 0;
  const temp = data?.main.temp ?? 0;
  const humidity = data?.main.humidity ?? 0;
  const status = data?.weather.length
    ? data.weather[0].main
    : 'No status available';
  const sunrise = data?.sys.sunrise ?? 0;
  const sunset = data?.sys.sunset ?? 0;
  const visibilityMeters = data?.visibility ?? 0;
  const visibilityKm = visibilityMeters / 1000;

  return (
    <>
      <AppBar
        title={city}
        displayBackButton={true}
        onClickBackButton={backButtonCB}
      />
      {isLoading ? (
        // TODO: Add a proper loader
        <div> Loading weather info for {city} </div>
      ) : (
        <Grid container alignItems={'center'} columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12} sm={6}>
            <TemperatureOverview
              highTemp={highTemp}
              lowTemp={lowTemp}
              temp={temp}
              status={status}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AdditionalInfoOverview
              sunrise={sunrise}
              sunset={sunset}
              humidity={humidity}
              visibility={visibilityKm}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};
