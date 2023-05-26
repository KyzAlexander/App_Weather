import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import ThisDay from "../ThisDay/ThisDay";
import DetailsDay from "../DetailsDay/DetailsDay";
import style from "./InfoDay.module.scss";

const InfoDay = () => {
  const dispatch = useDispatch();
  const { lat, lon, city } = useSelector(
    (state) => state.currentCitySliceReducer
  );
  const { weather } = useSelector((state) => state.currentWeatherSliceReducer);
  useEffect(() => {
    dispatch(fetchCurrentWeather(lat, lon));
  }, [dispatch, lat, lon]);

  return (
    <div className={style.infoDay}>
      <ThisDay weather={weather} city={city} />
      <DetailsDay weather={weather} />
    </div>
  );
};

export default InfoDay;
