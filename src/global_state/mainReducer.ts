import { commonSlice } from './commonSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { currentWeatherApi } from 'src/api/services/currentWeatherApi';

export const mainReducer = combineReducers({
  common: commonSlice.reducer,
  [currentWeatherApi.reducerPath]: currentWeatherApi.reducer,
});
