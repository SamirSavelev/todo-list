import { useEffect, useState } from "react";
import { ReactComponent as SunIcon } from "@assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "@assets/icons/moon.svg";
import styles from "./ThemeSwitch.module.scss";

type ThemeType = "light" | "dark";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as ThemeType;
    if (!localTheme) {
      localStorage.setItem("theme", "light");
    } else {
      setTheme(localTheme);
    }

    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${styles.switch} ${theme}`} onClick={toggleTheme}>
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
