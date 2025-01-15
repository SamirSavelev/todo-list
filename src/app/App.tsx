import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import "./styles/styles.scss";
import moment from "moment";

moment.locale("ru");

export const App = () => <RouterProvider router={router} />;
