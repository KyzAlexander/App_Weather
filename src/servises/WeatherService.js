import { apiCurrentWeather, apiNextWeather } from "../axios";

export const getCurrentWeather = (lat, lon) => {
  return apiCurrentWeather.get(`weather?lat=${lat}&lon=${lon}`);
};

export const getNextWeather = (lat, lon) => {
  return apiNextWeather.get(`forecast?lat=${lat}&lon=${lon}`);
};
