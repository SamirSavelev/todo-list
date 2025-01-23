import { ProjectListType, TaskInterface } from "@pages/Projects/data/types";
import { Option } from "@shared/ui/components/Select/types";
import { FC } from "react";

export interface TaskFormInterface {
  title: string;
  duration: string;
  description: string;
  startDate: string;
  endDate: string;
  project: Option;
}

interface EditTaskModaProps {
  isOpen: boolean;
  onSave: (data: TaskFormInterface) => void;
  onClose: () => void;
  task?: TaskInterface;
  projects: ProjectListType;
}

export type EditTaskModalType = FC<EditTaskModaProps>;
