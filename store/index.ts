import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "./API/carsApi";
import carFilterReducer from './slices/CarFilterReducer'

const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    carFilter : carFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

