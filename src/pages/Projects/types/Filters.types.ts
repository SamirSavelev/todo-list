import { FC } from "react";
import { ProjectListType, TaskListType } from "../data/types";

interface FiltersProps {
  projects: ProjectListType;
  tasks: TaskListType;
}

export type FiltersType = FC<FiltersProps>;
