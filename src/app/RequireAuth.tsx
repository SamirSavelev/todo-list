// RequireAuth.tsx
// src/app/RequireAuth.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@app/hooks";

export const RequireAuth: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};
