import { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "small" | "medium" | "large";
export type DescriptionType = "info" | "warning" | "error" | "success";
export interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  inputPrefix?: ReactNode;
  inputSuffix?: ReactNode;
  label?: string;
  description?: {
    message?: string;
    type?: DescriptionType;
  };
}
