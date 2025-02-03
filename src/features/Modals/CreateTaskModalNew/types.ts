import { ProjectListType } from "@pages/Projects/data/types";
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

interface CreateTaskModalNewProps {
  isOpen: boolean;
  onSave: (data: TaskFormInterface) => void;
  onClose: () => void;
  projects: ProjectListType;
}

export type CreateTaskModalNewType = FC<CreateTaskModalNewProps>;
