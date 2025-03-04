import { forwardRef, useState } from "react";
import styles from "./Input.module.scss";
import { InputProps } from "./types";
import cn from "classnames";

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

    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={cn(styles.label, labelClassName)}>{label}</label>
        )}
        <div
          className={cn(styles.container, styles[inputSize], inputClassName, {
            [styles.primary_border]: focus || hover,

            [styles.input_error]: description?.type === "error",
            [styles.input_warning]: description?.type === "warning",
            [styles.input_success]: description?.type === "success",
            [styles.disabled]: disabled,
          })}
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
            className={cn(
              styles.description,
              styles[description?.type || "info"]
            )}
          >
            {description.message}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
