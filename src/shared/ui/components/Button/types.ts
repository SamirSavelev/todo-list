import { FC, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  type?: "primary" | "outlined" | "default";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
}

export type ButtonType = FC<ButtonProps>;
