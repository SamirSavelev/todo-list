import { TaskInterface } from "@pages/Projects/data/types";
import { Option } from "@shared/ui/components/Select/types";
import { FC } from "react";

export interface EditTaskFormInterface {
  title: string;
  duration: string;
  description: string;
  startDate: string;
  endDate: string;
  project: Option | null;
}

interface EditTaskModaProps {
  isOpen: boolean;
  onSave: (data: EditTaskFormInterface) => void;
  onClose: () => void;
  task?: TaskInterface;
}

export type EditTaskModalType = FC<EditTaskModaProps>;
