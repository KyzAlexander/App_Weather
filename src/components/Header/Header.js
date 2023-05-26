import { Logo } from "../../assets/svg/logo";
// import { HiMoon, HiSun } from "react-icons/hi";
import { TbSunMoon } from "react-icons/tb";
import style from "./Header.module.scss";
import { useTheme } from "../../hooks/useTheme";
import { useDispatch } from "react-redux";
import { fetchCurrentCity } from "../../store/thunks/fetchCurrentCity";
import { useState } from "react";

const Header = () => {
  const theme = useTheme();
  const changeTheme = () => {
    theme.changeTheme(theme.theme === "light" ? "dark" : "light");
  };

  const [valueInput, setValueInput] = useState("minsk");

  const dispatch = useDispatch();
  const onSearch = () => {
    dispatch(fetchCurrentCity(valueInput));
    setValueInput("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(event);
    }
  };

  const colorSwithTheme = theme.theme === "light" ? "#0D1117" : "#6cd9ff";

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.header__logo}>
          <Logo />
        </div>
        <h1 className={style.header__title}>App Weather</h1>
      </div>
      <div className={style.wrapper}>
        <div
          className={style.header__changeTheme}
          onClick={() => changeTheme()}
        >
          <TbSunMoon size={30} color={`${colorSwithTheme}`} />
        </div>
        <div className={style.header__search}>
          <input
            className={style.searchInput}
            type="text"
            value={valueInput}
            onChange={(event) => setValueInput(event.target.value)}
            onKeyDown={(event) => handleKeyPress(event)}
            placeholder="Введите город"
          ></input>
          <button className={style.searchButton} onClick={() => onSearch()}>
            Найти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
