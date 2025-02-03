import { InputHTMLAttributes, FC } from "react";

export interface Option {
  label: string;
  value: string;
}

export type DescriptionType = "info" | "warning" | "error" | "success";

export interface SelectProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  label?: string;
  options: Option[];
  description?: {
    message?: string;
    type?: DescriptionType;
  };
  onChange?: (value: Option) => void;
  value?: Option | null;
}

export type SelectType = FC<SelectProps>;
