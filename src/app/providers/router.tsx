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
import { AuthProvider } from "./AuthProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout>
          <HomePage />
        </Layout>
      </AuthProvider>
    ),
  },
  {
    path: "/about",
    element: (
      <AuthProvider>
        <Layout>
          <AboutPage />
        </Layout>
      </AuthProvider>
    ),
  },
  {
    path: "/projects",
    element: (
      <AuthProvider>
        <Layout>
          <ProjectsPage />
        </Layout>
      </AuthProvider>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthProvider>
        <Layout>
          <ProfilePage />
        </Layout>
      </AuthProvider>
    ),
  },
  {
    path: "/settings",
    element: (
      <AuthProvider>
        <Layout>
          <SettingsPage />
        </Layout>
      </AuthProvider>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/auth",
    element: (
      <AuthProvider>
        <AuthPage />
      </AuthProvider>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthProvider>
        <RegisterPage />
      </AuthProvider>
    ),
  },
]);
