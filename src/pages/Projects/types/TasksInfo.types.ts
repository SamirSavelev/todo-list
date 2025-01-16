import { FC } from "react";
import { TaskInterface } from "../data/types";

interface TaskInfoProps extends TaskInterface {
  projectName: string;
  deleteTask(id: number): void;
  editTask(id: number): void;
}
export type TaskInfoType = FC<TaskInfoProps>;

// export interface TaskType {
//   id: number;
//   status: string;
//   name: string;
//   description: string;
//   startDate: string;
//   endDate: string;
//   project?: number; // ID проекта
//   duration?: number;
// }

// export interface ProjectType {
//   id: number;
//   title: string;
// }
