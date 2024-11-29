import { FC } from "react";
import { ProjectListType, TaskListType } from "../data/types";

interface TasksProps {
  projects: ProjectListType;
  tasks: TaskListType;
}

export type TasksType = FC<TasksProps>;
