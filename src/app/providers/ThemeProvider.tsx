import { useAppDispatch, useAppSelector } from "@app/hooks";
import { FC, PropsWithChildren, useEffect } from "react";
import { setTheme, ThemeType } from "src/features/Theme/themeSlice";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as ThemeType;
    if (!localTheme) {
      localStorage.setItem("theme", "light");
    } else {
      dispatch(setTheme(localTheme));
    }

    document.body.className = theme;
  }, [theme, dispatch]);

  return <>{children}</>;
};
