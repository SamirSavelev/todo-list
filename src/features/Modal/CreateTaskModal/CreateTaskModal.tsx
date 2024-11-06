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
    <div>
      <div className={styles.container}>
        <h3>Создание задачи</h3>
        <Input
          placeholder="Придумайте название задачи"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          label="Название"
        />
        <Textarea placeholder="Опишите детали задачи" label="Описание" />
        <Input type="date" label="Дата начала" />
        <Input type="date" label="Дата окончания" />
      </div>
      <div className={styles.button_container}>
        <Button type="primary" size="small" onClick={handleCancel}>
          Отменить
        </Button>
        <Button type="primary" size="small" onClick={handleSave}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};
