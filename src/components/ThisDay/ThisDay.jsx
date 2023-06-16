import { SvgSelector } from "../../assets/svg/SvgSelector";
import style from "./ThisDay.module.scss";

const ThisDay = ({ weather, city }) => {
  const date = new Date(weather.time * 1000);
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  return (
    <div className={style.thisDay}>
      <div className={style.wrapper}>
        <div className={style.thisDay__img}>
          <SvgSelector id={weather.icon} />
        </div>
        <p className={style.thisDay__description}>{weather.description}</p>
      </div>
      <div className={style.thisDay__info}>
        <p className={style.temp}>{Math.round(weather.temp)}°C</p>
        <p className={style.day}>Сегодня</p>
        <p className={style.time}>Время: {`${hours}:${minutes}`}</p>
        <p className={style.city}>Город: {city}</p>
      </div>
    </div>
  );
};

export default ThisDay;
