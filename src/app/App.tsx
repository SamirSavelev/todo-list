import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import "./styles/styles.scss";
import moment from "moment";
import { ThemeProvider } from "./providers/ThemeProvider/ThemeContext";

moment.locale("ru");

export const App = () => (
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
