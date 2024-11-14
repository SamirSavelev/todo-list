import { forwardRef, useState } from "react";
import styles from "./Input.module.scss";
import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = "medium",
      inputPrefix = <></>,
      inputSuffix = <></>,
      disabled = false,
      label,
      value,
      onChange,
      description,
      onClick,
      labelClassName = "",
      inputClassName = "",
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
        {label && (
          <label className={`${styles.label} ${labelClassName}`}>{label}</label>
        )}
        <div
          className={`${styles.container} ${styles[inputSize]} ${border} ${inputClassName}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={onClick}
        >
          {inputPrefix}
          <input
            {...props}
            ref={ref}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className={styles.input}
            disabled={disabled}
            value={value}
            onChange={onChange}
          />
          {inputSuffix}
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

Input.displayName = "Input";
