export type TasksStatus = "to-do" | "in-progress" | "done";

export interface TaskInterface {
  id: number;
  status: TasksStatus;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  project?: number;
  duration?: number;
}

export interface ProjectInterface {
  id: number;
  title: string;
}

export type ProjectListType = Array<ProjectInterface>;
export type TaskListType = Array<TaskInterface>;
