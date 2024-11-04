import { FC } from "react";

export interface TextareaProps {
  placeholder?: string;
  rows?: number;
  cols?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type TextareaType = FC<TextareaProps>;
