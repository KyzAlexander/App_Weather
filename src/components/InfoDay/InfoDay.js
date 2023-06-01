import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import ThisDay from "../ThisDay/ThisDay";
import DetailsDay from "../DetailsDay/DetailsDay";
import style from "./InfoDay.module.scss";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import { fetchNextWeather } from "../../store/thunks/fetchNextWeather";

import MapYandex from "../Map/Map";

const InfoDay = () => {
  const dispatch = useDispatch();
  const { lat, lon, city, isLoading } = useSelector(
    (state) => state.currentCitySliceReducer
  );
  const { weather } = useSelector((state) => state.currentWeatherSliceReducer);
  useEffect(() => {
    dispatch(fetchCurrentWeather(lat, lon));
  }, [dispatch, lat, lon]);

  const { weather_3_hour } = useSelector(
    (state) => state.nextWeatherSliceReducer
  );
  useEffect(() => {
    dispatch(fetchNextWeather(lat, lon));
  }, [dispatch, lat, lon]);

  return (
    <>
      {isLoading ? (
        <>
          <div className={style.infoDay}>
            <ThisDay weather={weather} city={city} />
            <DetailsDay weather={weather} />
          </div>
          <div className={style.hourlyForecastWrapper}>
            <p className={style.hourlyForecastWrapper__title}>
              Трехчасовой прогноз
            </p>
            <div className={style.hourlyForecastWrapper__wrapper}>
              {weather_3_hour.map((weather, index) => {
                return <HourlyForecast weather={weather} key={index} />;
              })}
            </div>
          </div>
          <MapYandex lat={lat} lon={lon} />{" "}
        </>
      ) : (
        <div className={style.wrapperloadingTitle}>
          <p className={style.wrapperloadingTitle__title}>
            Введите свой город для просмотра прогноза погоды
          </p>
        </div>
      )}
    </>
  );
};

export default InfoDay;
