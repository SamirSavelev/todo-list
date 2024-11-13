import { FC, SelectHTMLAttributes } from "react";

export type DescriptionType = "info" | "warning" | "error" | "success";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  placeholder?: string;
  description?: {
    message?: string;
    type?: DescriptionType;
  };
}

export type SelectType = FC<SelectProps>;
