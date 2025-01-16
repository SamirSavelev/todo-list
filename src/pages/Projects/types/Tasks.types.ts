import { FC } from "react";
import { ProjectListType, TaskListType } from "../data/types";

interface TasksProps {
  projects: ProjectListType;
  tasks: TaskListType;
  deleteTask(id: number): void;
  editTask(id: number): void;
}

export type TasksType = FC<TasksProps>;
