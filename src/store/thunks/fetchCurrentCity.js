import { getCurrentCity } from "../../servises/CityService";
import { currentCitySlice } from "../slices/currentCitySlice";

export const fetchCurrentCity = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(currentCitySlice.actions.fetchCurrentCity);
      const res = await getCurrentCity(payload);
      if (res.status === 200) {
        dispatch(currentCitySlice.actions.fetchCurrentCitySuccess(res));
      } else {
        dispatch(currentCitySlice.actions.fetchCurrentCityError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
