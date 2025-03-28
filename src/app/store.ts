import { projectReducer } from "@pages/Projects/model/projectsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { authApi, authReducerApi } from "src/api/auth/api";
import { profileApi, profileReducerApi } from "src/api/profile/api";
import { profileReducer } from "src/api/profile/slice";
import { themeReducer } from "src/features/Theme/themeSlice";
import { authReducer } from "src/services/auth/authSlice";

export const store = configureStore({
  reducer: {
    //Здесь мы добавляем редьюсеры слайсов
    theme: themeReducer,
    projects: projectReducer,
    auth: authReducer,
    profile: profileReducer,
    //Здесь мы добавляем редьюсеры API
    authApi: authReducerApi,
    profileApi: profileReducerApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
