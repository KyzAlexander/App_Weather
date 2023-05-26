import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "../store/slices/currentWeatherSlice";
import currentCitySliceReducer from "../store/slices/currentCitySlice";

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  currentCitySliceReducer,
});

// configureStore функция для создания хранилища
export const store = configureStore({
  reducer: rootReducer,
});
