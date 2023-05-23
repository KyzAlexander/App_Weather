import { Logo } from "../../assets/svg/logo";
// import { HiMoon, HiSun } from "react-icons/hi";
import { TbSunMoon } from "react-icons/tb";
import style from "./Header.module.scss";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const theme = useTheme();
  const changeTheme = () => {
    theme.changeTheme(theme.theme === "light" ? "dark" : "light");
  };

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
          {/* <HiMoon size={30} color="#ffd87a" />
          <HiSun size={30} color="#f7dd4c" /> */}
          <TbSunMoon size={30} color="#f7dd4c" />
        </div>
        <div className={style.header__search}>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Введите город"
          ></input>
          <button className={style.searchButton}>Найти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
