import { apiWeather } from "../axios";

export class WeatherService {
  static getCurrentWeather(lat, lon) {
    return apiWeather.get(`weather?lat=${lat}&lon=${lon}`);
  }
}
