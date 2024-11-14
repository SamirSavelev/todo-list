import { FC } from "react";

export interface TaskFormInterface {
  title: string;
  duration: string;
  description: string;
  startDate: string;
  endDate: string;
  select: string;
}

interface CreateTaskModalNewProps {
  onSave: (data: TaskFormInterface) => void;
  onClose: () => void;
}

export type CreateTaskModalNewType = FC<CreateTaskModalNewProps>;
