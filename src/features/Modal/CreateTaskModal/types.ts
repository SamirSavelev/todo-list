import { FC } from "react";
export interface TaskFormData {
  taskName: string;
  description: string;
  startDate: string;
  endDate: string;
  project: string;
  duration: string;
}
interface CreateTaskModalProps {
  onSave: (data: TaskFormData) => void; // Обновляем тип onSave
  onClose: () => void;
}

export type CreateTaskModalType = FC<CreateTaskModalProps>;
