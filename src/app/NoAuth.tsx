// NoAuth.tsx
// src/app/NoAuth.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@app/hooks";

export const NoAuth: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);

  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};
