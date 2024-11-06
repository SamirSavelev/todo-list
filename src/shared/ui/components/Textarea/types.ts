import { FC } from "react";

export interface TextareaProps {
  placeholder?: string;
  rows?: number;
  cols?: number;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type TextareaType = FC<TextareaProps>;
