import { TextareaProps } from "./types";
import styles from "./Textarea.module.scss";
import { useState } from "react";

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  rows = 4,
  cols,
  value,
  onChange,
}) => {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`${styles.container} ${
        focus || hover ? styles.primary_border : ""
      }`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <textarea
        className={styles.textarea}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      />
    </div>
  );
};
