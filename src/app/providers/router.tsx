import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  HomePage,
  NotFoundPage,
  AuthPage,
  RegisterPage,
} from "../../pages";
import { DraftPage } from "../../draft/DraftPage";
import { DraftPage2 } from "../../draft/DraftPage2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/draft",
    element: <DraftPage />,
  },

  {
    path: "/draft2",
    element: <DraftPage2 />,
  },
]);
