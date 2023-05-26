import { apiCity } from "../axios";

export class CityService {
  static getCurrentCity(city) {
    return apiCity.get(`direct?q=${city}`);
  }
}

// export const getCurrentCity = (city) => {
//   // city = "Paris";

//   let coordinatesUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=183d9ffc6524fdd4644da58e5ced1ce3`;
//   // const coordinates = axios.get(coordinatesUrl);
//   // const lat = coordinates.lat;
//   // const lon = coordinates.lat;
//   // const lat = "33.44";
//   // const lon = "-94.04";
//   // let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=183d9ffc6524fdd4644da58e5ced1ce3&lang={ru}`;

//   return axios.get(coordinatesUrl);
// };
