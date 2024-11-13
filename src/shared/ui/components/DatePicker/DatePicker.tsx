import { forwardRef, useState } from "react";
import styles from "./DatePicker.module.scss";
import { DatePickerProps } from "./types";

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      inputSize = "medium",
      disabled = false,
      label,
      value,
      onChange,
      description,
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false);
    const [hover, setHover] = useState(false);

    const border = disabled
      ? styles.disabled
      : description?.type === "error"
      ? styles.input_error
      : description?.type === "warning"
      ? styles.input_warning
      : focus || hover
      ? styles.primary_border
      : "";

    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <div
          className={`${styles.container} ${styles[inputSize]} ${border}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <input
            type="date" // Задаем тип date для выбора даты
            {...props}
            ref={ref}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={styles.input}
            disabled={disabled}
            value={value}
            onChange={onChange}
          />
        </div>
        {description?.message && (
          <div
            className={`${styles.description} ${
              styles[description?.type || "info"]
            }`}
          >
            {description.message}
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";
