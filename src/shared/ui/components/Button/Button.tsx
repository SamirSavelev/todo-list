import { ButtonType } from "./types";
import styles from "./Button.module.scss";

export const Button: ButtonType = ({
  children,
  type = "default",
  size = "medium",
  disabled = false,
  onClick,
  buttonType,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`${styles.container} ${styles[type]} ${styles[size]}`}
    type={buttonType}
  >
    {children}
  </button>
);
