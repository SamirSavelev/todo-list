import { useState } from "react";
import styles from "./Input.module.scss";
import { InputType } from "./types";

export const Input: InputType = ({
  inputSize = "medium",
  inputPrefix = <></>,
  inputSuffix = <></>,
  disabled = false,
  label,
  value,
  onChange,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={`${styles.container} ${styles[inputSize]} ${
          disabled ? styles.disabled : ""
        } ${(focus || hover) && !disabled ? styles.primary_border : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {inputPrefix}
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={styles.input}
          disabled={disabled}
          value={value} // Передаем значение из формы
          onChange={onChange} // Передаем управление изменением значения
          {...props}
        />
        {inputSuffix}
      </div>
    </div>
  );
};
