import { useAppDispatch } from "@app/hooks";
import { FC, PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLazyProfileQuery } from "src/api/profile/api";
import { setCredentials } from "src/services/auth/authSlice";

const noAuthRoutes = ["/auth", "/register"];

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [getProfile] = useLazyProfileQuery();
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const getProfileHandler = async () => {
    try {
      const response = await getProfile().unwrap();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const checkAuth = () => {
    const isAuth = accessToken && refreshToken;
    const isNoAuthRoute = noAuthRoutes.includes(pathname);

    if (!isAuth) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      if (isNoAuthRoute) {
        navigate("/auth");
      }
    }

    if (isAuth && isNoAuthRoute) {
      navigate("/");
    }

    if (isAuth && !isNoAuthRoute) {
      getProfileHandler();
    }
  };

  const initAuth = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    dispatch(setCredentials({ accessToken, refreshToken }));
  };

  useEffect(() => {
    initAuth();
  }, [location]);

  useEffect(() => {
    checkAuth();
  }, [location, accessToken, refreshToken]);

  return <>{children}</>;
};
