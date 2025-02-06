import { useEffect } from "react";
import { ReactComponent as SunIcon } from "@assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "@assets/icons/moon.svg";
import styles from "./ThemeSwitch.module.scss";
import { useAppSelector, useAppDispatch } from "@app/hooks";
import { setTheme, toggleTheme } from "src/features/Theme/themeSlice";

type ThemeType = "light" | "dark";

export const ThemeSwitch = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  // const setTheme = (theme: ThemeType) => {};

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as ThemeType;
    if (!localTheme) {
      localStorage.setItem("theme", "light");
    } else {
      dispatch(setTheme(localTheme));
    }

    document.body.className = theme;
  }, [theme, dispatch]);

  const toggleThemeHandler = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    dispatch(toggleTheme());
  };

  return (
    <div className={`${styles.switch} ${theme}`} onClick={toggleThemeHandler}>
      <div className={`${styles.slider} ${styles[`slider-${theme}`]}`} />
      <div
        className={`${styles.option} ${theme === "light" ? styles.active : ""}`}
      >
        <SunIcon className={styles.icon} />
        <span>Light</span>
      </div>
      <div
        className={`${styles.option} ${theme === "dark" ? styles.active : ""}`}
      >
        <MoonIcon className={styles.icon} />
        <span>Dark</span>
      </div>
    </div>
  );
};
