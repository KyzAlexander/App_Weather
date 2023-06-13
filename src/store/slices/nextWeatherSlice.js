import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather_3_hour: [],
  isLoadingNextWeather: false,
  response: {
    status: 0,
    massage: "",
  },
};

export const nextWeatherSlice = createSlice({
  name: "next_weather",
  initialState,
  reducers: {
    fetchNextWeather(state) {
      state.isLoadingNextWeather = true; // мутируем значение state
    },
    fetchNextWeatherSuccess(state, action) {
      state.weather_3_hour = action.payload.data.list;
      state.isLoadingNextWeather = true;
      state.response = {
        status: action.payload.status,
        massage: action.payload.statusText,
      };
    },
    fetchNextWeatherError(state, action) {
      state.isLoadingNextWeather = false;
      state.response = {
        status: action.payload.status,
        massage: action.payload.statusText,
      };
    },
  },
});

export default nextWeatherSlice.reducer;
