import { commonSlice } from './commonSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { openWeatherAPI } from 'src/api/services/openWeatherAPI';

export const mainReducer = combineReducers({
  common: commonSlice.reducer,
  [openWeatherAPI.reducerPath]: openWeatherAPI.reducer,
});
