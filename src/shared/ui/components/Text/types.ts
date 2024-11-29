import { CSSProperties, FC, PropsWithChildren } from "react";

interface TextProps extends PropsWithChildren {
  variant?: "h1" | "h2" | "h3" | "body1" | "body2" | "body3";
  as?: "div" | "span";
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style?: CSSProperties;
}

export type TextType = FC<TextProps>;
