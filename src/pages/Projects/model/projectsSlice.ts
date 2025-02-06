import { mockProjectsList, mockTasksList } from "../data/mocks";
import { ProjectListType, TaskListType } from "../data/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "light" | "dark";

interface ProjectState {
  projectsList: ProjectListType;
  tasksList: TaskListType;
}

const initialState: ProjectState = {
  projectsList: mockProjectsList,
  tasksList: mockTasksList,
};

const projectsSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectsList: (state, action: PayloadAction<ProjectListType>) => {
      state.projectsList = action.payload;
    },
    setTasksList: (state, action: PayloadAction<TaskListType>) => {
      state.tasksList = action.payload;
    },
  },
});

export const { setProjectsList, setTasksList } = projectsSlice.actions;

export const projectReducer = projectsSlice.reducer;
