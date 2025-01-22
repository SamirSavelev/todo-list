import { FC } from "react";

export interface TaskFormInterface {
  title: string;
  duration: string;
  description: string;
  startDate: string;
  endDate: string;
  project: string;
}

interface CreateTaskModalNewProps {
  isOpen: boolean;
  onSave: (data: TaskFormInterface) => void;
  onClose: () => void;
}

export type CreateTaskModalNewType = FC<CreateTaskModalNewProps>;
