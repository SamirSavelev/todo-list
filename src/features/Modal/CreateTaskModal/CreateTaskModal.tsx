import { useState } from "react";
import styles from "./CreateTaskModal.module.scss";
import { CreateTaskModalType } from "../../../../src/features/Modal/CreateTaskModal/types";
import { Button, Input } from "@shared/ui/components";
import { Textarea } from "@shared/ui/components/Textarea";

export const CreateTaskModal: CreateTaskModalType = ({ onSave, onClose }) => {
  const [taskName, setTaskName] = useState("");

  const handleSave = () => {
    onSave(taskName);
    setTaskName("");
  };

  const handleCancel = () => {
    setTaskName("");
    onClose();
  };

  return (
    <div className={styles.container}>
      <h3>Создание задачи</h3>
      <h5>Название</h5>
      <Input
        placeholder="Придумайте название задачи"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <h5>Описание</h5>
      <Textarea placeholder="Опишите детали задачи" />
      <Button type="primary" onClick={handleCancel}>
        Отменить
      </Button>
      <Button type="primary" onClick={handleSave}>
        Сохранить
      </Button>
    </div>
  );
};
