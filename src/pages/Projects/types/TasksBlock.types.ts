import { FC } from "react";
import { ProjectListType, TaskListType } from "../data/types";

interface TasksBlockProps {
  title: string;
  tasks: TaskListType;
  projects: ProjectListType;
  deleteTask(id: number): void;
  editTask(id: number): void;
}

export type TasksBlockType = FC<TasksBlockProps>;
