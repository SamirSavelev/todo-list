import { createBrowserRouter } from "react-router-dom";
import { DraftPage } from "../../draft/DraftPage";
import { DraftPage2 } from "../../draft/DraftPage2";
import {
  AboutPage,
  HomePage,
  NotFoundPage,
  AuthPage,
  RegisterPage,
} from "../../pages";
import { Layout } from "@shared/ui/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
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
