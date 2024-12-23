import { FC } from "react";
import { ProjectListType, TaskListType } from "../data/types";

interface TasksBlockProps {
  title: string;
  tasks: TaskListType;
  projects: ProjectListType;
}

export type TasksBlockType = FC<TasksBlockProps>;
