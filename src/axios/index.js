import axios from "axios";
import {
  API_KEY_WEATHER,
  BASE_URL_CITY,
  BASE_URL_WEATHER,
} from "../constants/urls";

//создается новый экземпляр axios с определенной конфигурацией
export const apiCity = axios.create({
  baseURL: BASE_URL_CITY,
});
export const apiCurrentWeather = axios.create({
  baseURL: BASE_URL_WEATHER,
});
export const apiNextWeather = axios.create({
  baseURL: BASE_URL_WEATHER,
});

//добавляем перехват запросов
apiCity.interceptors.request.use((config) => {
  config.url = config.url + `&appid=${API_KEY_WEATHER}&lang={ru}`;
  return config;
});

apiCurrentWeather.interceptors.request.use((config) => {
  config.url = config.url + `&appid=${API_KEY_WEATHER}&units=metric&lang=ru`;
  return config;
});

apiNextWeather.interceptors.request.use((config) => {
  config.url =
    config.url + `&appid=${API_KEY_WEATHER}&cnt=4&units=metric&lang=ru`;
  return config;
});
