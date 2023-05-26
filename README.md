# Welcome to the source code for the hows-the-weather application

## Directory layout

Most of the code is located in `/src` and is separated into different directories:

- `/src/api` Code related to client-side endpoints for fetching data
- `/src/application` Code which is specific to rendering the application. This direcotry is split up by page route. Each page directory contains the main page, and any components, utility methods, types, etc, specific to rendering page (such as the dashboard or location view page).
- `/src/components` This contains reusable components which have been identified as being used in multiple places.
- `/src/global_state` This contains code for any global state needed in the application. This is wiring mainly for RTK Query to use the redux store to cache query results. This application tries to used as little global state as possible.
- `/src/hooks` This contains any common hooks used across multiple components or pages.
- `utils` This contains any common utility functions used across multiple pages.

## Running the application

This application is deployed to GitHub Pages and can be viewed at [https://aannarino.github.io/hows-the-weather/](https://aannarino.github.io/hows-the-weather/). The routing can be a bit funny, so sometimes refreshing a page will return a 404

You can also run it locally following the steps below

### Prerequisits

- In order to run this locally, you must provide an api key from the OpenWeather API [](https://openweathermap.org/api)
- You must then create .env.local or .env.development.local file at the root of the project and add the key with variable name REACT_APP_WEATHER_API_KEY;

```
//In the .env.local file
  REACT_APP_WEATHER_API_KEY=your_api_key
```

- you should have the latest version of node installed
- you should have the latest version of npm installed

### Start the server

- Run `npm install` to ensure all dependencies are installed
- Run `npm start` to start the development server. This should open up the webpage in your default browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Improvements

- [] Testing UI: Add tests to AppBar
- [] Testing UI: Add tests to DistanceDisplay
- [] Testing UI: Add tests to PercentDisplay
- [] Testing UI: Add tests to TimeDisplay
- [] Testing UI: Add tests to TemperatureDisplay
- [] Testing UI: Add tests to TemperatureByLocationCard
- [] Improvement: Display a fallback error page
- [] Improvement: extract and display error messages where relevant
- [] Improvement: Display a loading component instead of simple text
- [] Improvement: Inject API Key in RTK Query endpoint instead of retrieving it in component files
- [] Feature: Allow user to switch units. This should be saved in local storage
- [] Feature: Allow users to change default locations. Should be saved in local storage
