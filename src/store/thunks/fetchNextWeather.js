import { getNextWeather } from "../../servises/WeatherService";
import { nextWeatherSlice } from "../slices/nextWeatherSlice";

export const fetchNextWeather = (lat, lon) => {
  return async (dispatch) => {
    try {
      dispatch(nextWeatherSlice.actions.fetchNextWeather);
      const res = await getNextWeather(lat, lon);
      if (res.status === 200) {
        dispatch(nextWeatherSlice.actions.fetchNextWeatherSuccess(res));
      } else {
        dispatch(nextWeatherSlice.actions.fetchNextWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
