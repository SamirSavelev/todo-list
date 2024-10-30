import React, { useState, useEffect } from "react";
import styles from "./ThemeSwitch.module.scss";

export const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className={styles.slider}></span>
    </label>
  );
};
