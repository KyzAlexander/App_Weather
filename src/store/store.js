import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "../store/slices/currentWeatherSlice";
import currentCitySliceReducer from "../store/slices/currentCitySlice";
import nextWeatherSliceReducer from "../store/slices/nextWeatherSlice";

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  currentCitySliceReducer,
  nextWeatherSliceReducer,
});

// configureStore функция для создания хранилища
export const store = configureStore({
  reducer: rootReducer,
});
