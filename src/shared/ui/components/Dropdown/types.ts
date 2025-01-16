import { FC, PropsWithChildren } from "react";

export interface Option {
  label: string;
  value: string;
}
export interface DropdownProps extends PropsWithChildren {
  options: Option[];
  onSelect: (value: string) => void;
  position?: "top" | "bottom";
  className?: string;
}

export type DropdownType = FC<DropdownProps>;
