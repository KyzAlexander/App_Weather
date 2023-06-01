import { apiCity } from "../axios";

export const getCurrentCity = (city) => {
  return apiCity.get(`direct?q=${city}`);
};
