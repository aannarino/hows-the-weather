import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './global_state/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardPage } from './application/dashboard/DashboardPage';
import { LocationViewPage } from './application/locationView/LocationViewPage';
import { ErrorPage } from './application/ErrorPage';

const router = createBrowserRouter(
  [
    {
      path: '/hows-the-weather/',
      element: <DashboardPage />,
    },
    {
      path: '/hows-the-weather/location/:city',
      element: <LocationViewPage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ],
  { basename: '' }
);
const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
