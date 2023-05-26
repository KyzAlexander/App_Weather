import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: "",
  lon: "",
  city: "",
  isLoading: false,
  response: {
    status: 0,
    massage: "",
  },
};

export const currentCitySlice = createSlice({
  name: "current_city",
  initialState,
  reducers: {
    fetchCurrentCity(state) {
      state.isLoading = true;
    },
    fetchCurrentCitySuccess(state, action) {
      state.lat = action.payload.data[0].lat;
      state.lon = action.payload.data[0].lon;
      state.city = action.payload.data[0].local_names.ru;
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        massage: action.payload.statuseText,
      };
    },
    fetchCurrentCityError(state, action) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        massage: action.payload.statuseText,
      };
    },
  },
});

export default currentCitySlice.reducer;
