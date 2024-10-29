// src/components/Button.tsx
import { cva } from "class-variance-authority";
import React from "react";

// Определяем стили с помощью cva
const buttonStyles = cva(
  "px-4 py-2 rounded", // Базовые стили
  {
    variants: {
      intent: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-black",
      },
      size: {
        small: "text-sm",
        large: "text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
  }
);

interface ButtonProps {
  intent?: "primary" | "secondary";
  size?: "small" | "large";
  children: React.ReactNode;
}

const Button2: React.FC<ButtonProps> = ({ intent, size, children }) => {
  return <button className={buttonStyles({ intent, size })}>{children}</button>;
};

export default Button2;
