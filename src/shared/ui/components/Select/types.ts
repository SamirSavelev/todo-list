import { InputHTMLAttributes, FC } from "react";

export interface Option {
  label: string;
  value: string;
}

export type DescriptionType = "info" | "warning" | "error" | "success";

export interface SelectProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  options: Option[];
  description?: {
    message?: string;
    type?: DescriptionType;
  };
  value?: string;
  select?: (option: Option) => void;
  selectedValue?: Option | null;
}

export type SelectType = FC<SelectProps>;
