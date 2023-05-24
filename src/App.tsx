import './App.css';
import { useGetCurrentWeatherByLocationQuery } from './api/services/currentWeatherApi';
import { Provider } from 'react-redux';
import { store } from './global_state/store';

function App() {
  const { data, isLoading, error } = useGetCurrentWeatherByLocationQuery({
    lat: 59.911491,
    lon: 10.757933,
    appid: '24f3b9f38b0b617fb0f701ebc854dbd1',
  });
  return (
    <Provider store={store}>
      <div className="App">
        <p>Hello World</p>
        <header className="App-header">
          {isLoading ? (
            <p>LOADING...</p>
          ) : !error ? (
            <pre>
              <code>{JSON.stringify(data)}</code>
            </pre>
          ) : (
            <div>
              <p>An error occurred</p>
              <p>{JSON.stringify(error)}</p>
            </div>
          )}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
