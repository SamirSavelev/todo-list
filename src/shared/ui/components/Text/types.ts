import { FC, PropsWithChildren } from "react";

interface TextProps extends PropsWithChildren {
  variant?: "h1" | "h2" | "h3" | "body1" | "body2" | "body3";
  as?: "div" | "span";
}

export type TextType = FC<TextProps>;
