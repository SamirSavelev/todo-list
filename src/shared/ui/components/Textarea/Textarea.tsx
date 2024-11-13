import { forwardRef, useState } from "react";
import styles from "./Textarea.module.scss";
import { TextareaProps } from "./types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      placeholder,
      rows = 4,
      cols,
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

    // Устанавливаем стили бордера в зависимости от статуса
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
          className={`${styles.container} ${border}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <textarea
            ref={ref}
            className={styles.textarea}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...props}
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

Textarea.displayName = "Textarea";
