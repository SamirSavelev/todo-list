import { FC } from "react";
import { TaskListType } from "../data/types";

interface TasksBlockProps {
  title: string;
  tasks: TaskListType;
}

export type TasksBlockType = FC<TasksBlockProps>;
