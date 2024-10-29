import { ButtonType } from "./types";
import styles from "./Button.module.scss";

export const Button: ButtonType = ({
  children,
  type = "default",
  size = "medium",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.container} ${
        type === "primary"
          ? styles.primary
          : type === "outlined"
          ? styles.outlined
          : styles.default
      } ${
        size === "large"
          ? styles.large
          : size === "small"
          ? styles.small
          : styles.medium
      }`}
    >
      {children}
    </button>
  );
};
