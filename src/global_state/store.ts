import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './mainReducer';
import { openWeatherAPI } from 'src/api/services/openWeatherAPI';

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([openWeatherAPI.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
