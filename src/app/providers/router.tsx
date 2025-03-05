import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  HomePage,
  NotFoundPage,
  AuthPage,
  RegisterPage,
  ProjectsPage,
  ProfilePage,
  SettingsPage,
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
    path: "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <ProjectsPage />
      </Layout>
    ),
  },
  {
    path: "/profile",
    element: (
      <Layout>
        <ProfilePage />
      </Layout>
    ),
  },
  {
    path: "/settings",
    element: (
      <Layout>
        <SettingsPage />
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
]);
