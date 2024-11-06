import { FC, InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "small" | "medium" | "large";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  inputPrefix?: ReactNode;
  inputSuffix?: ReactNode;
  label?: string;
}

export type InputType = FC<InputProps>;
