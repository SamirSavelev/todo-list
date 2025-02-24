// src/providers/router.tsx
// src/providers/router.tsx
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
import { RequireAuth } from "src/app/RequireAuth";
import { NoAuth } from "src/app/NoAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout>
          <HomePage />
        </Layout>
      </RequireAuth>
    ),
  },
  {
    path: "/about",
    element: (
      <RequireAuth>
        <Layout>
          <AboutPage />
        </Layout>
      </RequireAuth>
    ),
  },
  {
    path: "/projects",
    element: (
      <RequireAuth>
        <Layout>
          <ProjectsPage />
        </Layout>
      </RequireAuth>
    ),
  },
  {
    path: "/profile",
    element: (
      <RequireAuth>
        <Layout>
          <ProfilePage />
        </Layout>
      </RequireAuth>
    ),
  },
  {
    path: "/settings",
    element: (
      <RequireAuth>
        <Layout>
          <SettingsPage />
        </Layout>
      </RequireAuth>
    ),
  },
  {
    path: "/auth",
    element: (
      <NoAuth>
        <AuthPage />
      </NoAuth>
    ),
  },
  {
    path: "/register",
    element: (
      <NoAuth>
        <RegisterPage />
      </NoAuth>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
