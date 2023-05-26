import axios from "axios";
import { APP_KEY, BASE_URL_CITY, BASE_URL_WEATHER } from "../constants/urls";

//создается новый экземпляр axios с определенной конфигурацией
export const apiCity = axios.create({
  baseURL: BASE_URL_CITY,
});
export const apiWeather = axios.create({
  baseURL: BASE_URL_WEATHER,
});

//добавляем перехват запросов
apiCity.interceptors.request.use((config) => {
  config.url = config.url + `&appid=${APP_KEY}&lang={ru}`;
  return config;
});

apiWeather.interceptors.request.use((config) => {
  config.url = config.url + `&appid=${APP_KEY}&units=metric&lang=ru`;
  return config;
});
