import { SvgSelector } from "../../assets/svg/SvgSelector";
import style from "./HourlyForecast.module.scss";

const HourlyForecast = ({ weather }) => {
  const date = new Date(weather.dt * 1000);
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  return (
    <div className={style.hourlyForecast}>
      <p className={style.hourlyForecast__time}>{`${hours}:${minutes}`}</p>
      <div className={style.hourlyForecast__img}>
        <SvgSelector id={weather.weather[0].icon} />
      </div>
      <p className={style.hourlyForecast__temp}>
        {Math.round(weather.main.temp)} °C
      </p>
      <p className={style.hourlyForecast__description}>
        {weather.weather[0].description}
      </p>
    </div>
  );
};

export default HourlyForecast;
