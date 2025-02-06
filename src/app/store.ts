import { projectReducer } from "@pages/Projects/model/projectsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "src/features/Theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
