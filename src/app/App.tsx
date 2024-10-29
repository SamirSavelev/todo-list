import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import "./styles/style.css";

export const App = () => {
  return <RouterProvider router={router} />;
};
