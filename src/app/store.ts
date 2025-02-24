import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "src/features/Theme/themeSlice";
import { projectReducer } from "@pages/Projects/model/projectsSlice";
import { authApi, reducerAuth } from "src/api/auth/api";
import { profileApi, reducerProfile } from "src/api/profile/api";
import authReducer from "src/features/Auth/authSlice"; // Импортируем auth‑редюсер

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectReducer,
    auth: authReducer, // Добавляем auth‑редюсер
    authApi: reducerAuth,
    profileApi: reducerProfile,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
