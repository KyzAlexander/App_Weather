import { getCurrentWeather } from "../../servises/WeatherService";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";

export const fetchCurrentWeather = (lat, lon) => {
  return async (dispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather);
      const res = await getCurrentWeather(lat, lon);
      if (res.status === 200) {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
