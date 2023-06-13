import { getCurrentCity } from "../../servises/CityService";
import { currentCitySlice } from "../slices/currentCitySlice";

export const fetchCurrentCity = (payload) => {
  return async (dispatch) => {
    const res = await getCurrentCity(payload);
    try {
      dispatch(currentCitySlice.actions.fetchCurrentCity);

      if (res.status === 200) {
        dispatch(currentCitySlice.actions.fetchCurrentCitySuccess(res));
      } else {
        dispatch(currentCitySlice.actions.fetchCurrentCityError(res));
      }
    } catch (error) {
      dispatch(currentCitySlice.actions.fetchCurrentCityError(res));
    }
  };
};
