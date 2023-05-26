import { AppBar } from 'src/components/AppBar';
import { useNavigate, useParams } from 'react-router-dom';
import { TemperatureOverview } from './components/TemperatureOverview';
import { AdditionalInfoOverview } from './components/AdditionalInfoOverview';
import Grid from '@mui/material/Grid';
import { useGetCurrentWeatherByCityQuery } from 'src/api/services/openWeatherAPI';
import { styled } from '@mui/system';

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
        <FlexWrapper>
          <div style={{ padding: '8px' }}>
            <TemperatureOverview
              highTemp={highTemp}
              lowTemp={lowTemp}
              temp={temp}
              status={status}
            />
          </div>
          <div style={{ maxWidth: '500px', padding: '8px' }}>
            <AdditionalInfoOverview
              sunrise={sunrise}
              sunset={sunset}
              humidity={humidity}
              visibility={visibilityKm}
            />
          </div>
        </FlexWrapper>
      )}
    </>
  );
};

const FlexWrapper = styled('div')((props) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
  [props.theme.breakpoints.up('xs')]: {
    gap: '30px',
  },
  [props.theme.breakpoints.up('sm')]: {
    gap: '2 0px',
  },
  [props.theme.breakpoints.up('md')]: {
    gap: '100px',
  },
}));
