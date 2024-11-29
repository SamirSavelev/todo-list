import { TextType } from "./types";
import styles from "./Text.module.scss";

export const Text: TextType = ({
  children,
  variant = "body1",
  as = "div",
  fontWeight,
  style,
}) => {
  const Tag = as;
  return (
    <Tag className={styles[variant]} style={{ fontWeight, ...style }}>
      {children}
    </Tag>
  );
};
