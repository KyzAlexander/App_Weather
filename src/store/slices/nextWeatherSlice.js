import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather_3_hour: [],
  isLoading: false,
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
      state.isLoading = true; // мутируем значение state
    },
    fetchNextWeatherSuccess(state, action) {
      state.weather_3_hour = action.payload.data.list;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        massage: action.payload.statuseText,
      };
    },
    fetchNextWeatherError(state, action) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        massage: action.payload.statuseText,
      };
    },
  },
});

export default nextWeatherSlice.reducer;
