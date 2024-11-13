import { TextareaHTMLAttributes } from "react";

export type DescriptionType = "info" | "warning" | "error" | "success";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  cols?: number;
  label?: string;
  description?: {
    message?: string;
    type?: DescriptionType;
  };
}
