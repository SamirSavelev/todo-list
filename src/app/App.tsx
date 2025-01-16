import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import "./styles/styles.scss";
import { ThemeProvider } from "./providers/ThemeProvider/ThemeContext";

export const App = () => (
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
