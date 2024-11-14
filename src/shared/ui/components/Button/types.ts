import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  type?: "primary" | "outlined" | "default";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  buttonType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export type ButtonType = FC<ButtonProps>;
