import { FC } from "react";

interface CreateTaskModalProps {
  onSave: (taskName: string) => void; // Обновляем тип onSave
  onClose: () => void;
}

export type CreateTaskModalType = FC<CreateTaskModalProps>;
