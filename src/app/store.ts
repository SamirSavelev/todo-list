import { projectReducer } from "@pages/Projects/model/projectsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { authApi, reducerAuth } from "src/api/auth/api";
import { themeReducer } from "src/features/Theme/themeSlice";

export const store = configureStore({
  reducer: {
    //Здесь мы добавляем редьюсеры слайсов
    theme: themeReducer,
    projects: projectReducer,
    //Здесь мы добавляем редьюсеры API
    authApi: reducerAuth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
