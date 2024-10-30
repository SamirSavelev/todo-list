import React, { useState, useEffect } from "react";
import { ReactComponent as SunIcon } from "@assets/icons/sun.svg"; // Иконка для светлой темы
import { ReactComponent as MoonIcon } from "@assets/icons/moon.svg"; // Иконка для темной темы
import styles from "./ThemeSwitch.module.scss";

export const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.className = theme; // Применяем класс темы к body
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${styles.switch} ${theme}`} onClick={toggleTheme}>
      {/* Слайдер, который будет двигаться */}
      <div
        className={`${styles.slider} ${theme === "dark" ? styles.dark : ""}`}
      ></div>

      {/* Опции для выбора темы */}
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
