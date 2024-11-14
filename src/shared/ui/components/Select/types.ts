import { InputHTMLAttributes, FC, ChangeEvent } from "react";

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
  onChange?: (event: ChangeEvent<HTMLInputElement> | string) => void; // Изменяем тип на совместимый
}

export type SelectType = FC<SelectProps>;
