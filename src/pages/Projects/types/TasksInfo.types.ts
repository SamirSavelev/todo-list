export interface TaskType {
  id: number;
  status: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  project?: number; // ID проекта
  duration?: number;
}

export interface ProjectType {
  id: number;
  title: string;
}
