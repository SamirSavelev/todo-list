import { FC } from "react";

interface TasksProps {
  deleteTask(id: number): void;
  editTask(id: number): void;
}

export type TasksType = FC<TasksProps>;
