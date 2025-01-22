import { TaskInterface } from "@pages/Projects/data/types";
import { FC } from "react";

export interface TaskFormInterface {
  title: string;
  duration: string;
  description: string;
  startDate: string;
  endDate: string;
  project: string;
}

interface EditTaskModaProps {
  isOpen: boolean;
  onSave: (data: TaskFormInterface) => void;
  onClose: () => void;
  task?: TaskInterface;
}

export type EditTaskModalType = FC<EditTaskModaProps>;
