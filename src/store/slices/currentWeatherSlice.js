import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: {
    temp: "",
    description: "",
    time: "",
    icon: "",
    feel_temp: "",
    wind_speed: "",
    sunrise_time: "",
    sunset_time: "",
  },
  isLoadingWeather: false,
  response: {
    status: 0,
    massage: "",
  },
};

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoadingWeather = true; // мутируем значение state
    },
    fetchCurrentWeatherSuccess(state, action) {
      state.weather.temp = action.payload.data.main.temp;
      state.weather.description = action.payload.data.weather[0].description;
      state.weather.time = action.payload.data.dt;
      state.weather.icon = action.payload.data.weather[0].icon;
      state.weather.feel_temp = action.payload.data.main.feels_like;
      state.weather.wind_speed = action.payload.data.wind.speed;
      state.weather.sunrise_time = action.payload.data.sys.sunrise;
      state.weather.sunset_time = action.payload.data.sys.sunset;
      state.isLoadingWeather = true;
      state.response = {
        status: action.payload.status,
        massage: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(state, action) {
      state.isLoadingWeather = false;
      state.response = {
        status: action.payload.status,
        massage: action.payload.statusText,
      };
    },
  },
});

export default currentWeatherSlice.reducer;
