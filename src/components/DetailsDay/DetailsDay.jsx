import { SvgSpeed } from "../../assets/svg/SvgSpeed";
import { SvgSunrise } from "../../assets/svg/SvgSunrise";
import { SvgSunset } from "../../assets/svg/SvgSunset";
import { SvgTemp } from "../../assets/svg/SvgTemp";
import style from "./DetailsDay.module.scss";

const DetailsDay = ({ weather }) => {
  const dateSunrise = new Date(weather.sunrise_time * 1000);
  const dateSunset = new Date(weather.sunset_time * 1000);
  const hoursSunrise = dateSunrise.getHours();
  const minutesSunrise =
    dateSunrise.getMinutes() < 10
      ? "0" + dateSunrise.getMinutes()
      : dateSunrise.getMinutes();
  const hoursSunset = dateSunset.getHours();
  const minutesSunset =
    dateSunset.getMinutes() < 10
      ? "0" + dateSunset.getMinutes()
      : dateSunset.getMinutes();

  const data = [
    {
      icon: <SvgTemp />,
      title: "Ощущается",
      description: `${Math.round(weather.feel_temp)} °C`,
    },
    {
      icon: <SvgSpeed />,
      title: "Ветер",
      description: `${Math.round(weather.wind_speed)} м/с`,
    },
    {
      icon: <SvgSunrise />,
      title: "Восход",
      description: `${hoursSunrise}:${minutesSunrise}`,
    },
    {
      icon: <SvgSunset />,
      title: "Закат",
      description: `${hoursSunset}:${minutesSunset}`,
    },
  ];

  return (
    <div className={style.detailsDay}>
      {data.map((item) => {
        return (
          <div className={style.wrapperItem} key={item.title}>
            <div className={style.detailsDay__icon}>{item.icon}</div>
            <div className={style.wrapperText}>
              <p className={style.detailsDay__title}>{item.title}</p>
              <p className={style.detailsDay__description}>
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsDay;
