import { SvgSelector } from "../../assets/svg/SvgSelector";
import style from "./ThisDay.module.scss";

const ThisDay = () => {
  return (
    <div className={style.thisDay}>
      <div className={style.wrapper}>
        <div className={style.thisDay__img}>
          <SvgSelector id="cloudy" />
        </div>
        <p className={style.thisDay__discribe}>солнечно</p>
      </div>

      <div className={style.thisDay__info}>
        <p className={style.temp}>20</p>
        <p className={style.day}>Сегодня</p>
        <p className={style.time}>Время: 11:40</p>
        <p className={style.city}>Город: Минск</p>
      </div>
    </div>
  );
};

export default ThisDay;
