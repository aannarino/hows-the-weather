import './App.css';
import {
  useGetCurrentWeatherByLocationQuery,
  useGetGeocodingLocationQuery,
} from './api/services/openWeatherAPI';
import { Provider } from 'react-redux';
import { store } from './global_state/store';

function App() {
  /*   const {
    data: weatherData,
    isLoading: isLoadingWeatherQuery,
    error: weatherQueryError,
  } = useGetCurrentWeatherByLocationQuery({
    lat: 59.911491,
    lon: 10.757933,
    appid: '24f3b9f38b0b617fb0f701ebc854dbd1',
  }); */
  const {
    data: geocodingData,
    isLoading: isLoadingGeocodingQuery,
    error: geocodingQueryError,
  } = useGetGeocodingLocationQuery({
    q: 'oslo,london',
    appid: '24f3b9f38b0b617fb0f701ebc854dbd1',
  });
  return (
    <Provider store={store}>
      <div className="App">
        <p>Hello World</p>
        <header className="App-header">
          {/* {isLoadingWeatherQuery || isLoadingGeocodingQuery ? (
            <p>LOADING...</p>
          ) : !weatherQueryError && !geocodingQueryError ? (
            <pre>
              <code>{JSON.stringify(weatherData)}</code>
              <code>{JSON.stringify(geocodingData)}</code>
            </pre>
          ) : (
            <div>
              <p>An error occurred</p>
              <p>
                {JSON.stringify(
                  weatherQueryError ? weatherQueryError : geocodingQueryError
                )}
              </p>
            </div>
          )}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
