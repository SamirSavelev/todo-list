import React, { useState } from "react";
import styles from "./Textarea.module.scss";
import { TextareaProps } from "./types";

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  rows = 4,
  cols,
  value,
  onChange,
  label,
}) => {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={`${styles.container} ${
          focus || hover ? styles.primary_border : ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <textarea
          className={styles.textarea}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          value={value} // Используем значение из формы
          onChange={onChange} // Управляем изменением значения
        />
      </div>
    </div>
  );
};
