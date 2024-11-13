import { forwardRef, useState } from "react";
import styles from "./Select.module.scss";
import { SelectProps } from "./types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      disabled = false,
      description,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false);
    const [hover, setHover] = useState(false);

    // Устанавливаем стиль бордера в зависимости от состояния
    const border = disabled
      ? styles.disabled
      : description?.type === "error"
      ? styles.select_error
      : description?.type === "warning"
      ? styles.select_warning
      : focus || hover
      ? styles.primary_border
      : "";

    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <div
          className={`${styles.container} ${border}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <select
            ref={ref}
            className={styles.select}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...props}
          >
            <option value="" disabled>
              Выберите значение
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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

Select.displayName = "Select";
