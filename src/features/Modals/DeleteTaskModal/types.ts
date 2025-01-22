import { FC } from "react";

export interface DeleteTaskModalProps {
  isOpen: boolean;
  onDelete: () => void;
  onClose: () => void;
}

export type DeleteTaskModalType = FC<DeleteTaskModalProps>;
