import { useState } from "react";
import styles from "./CreateTaskModal.module.scss";
import { CreateTaskModalType } from "../../../../src/features/Modal/CreateTaskModal/types";
import { Button, Input, Select } from "@shared/ui/components";
import { Textarea } from "@shared/ui/components/Textarea";

export const CreateTaskModal: CreateTaskModalType = ({ onSave, onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [selectedProject, setSelectedProject] = useState(""); // Добавлено состояние для выбора проекта

  const handleSave = () => {
    onSave(taskName);
    setTaskName("");
    setSelectedProject(""); // Сброс выбранного проекта при сохранении
  };

  const handleCancel = () => {
    setTaskName("");
    setSelectedProject(""); // Сброс выбранного проекта при отмене
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
        <Select
          options={["1", "2"]}
          placeholder="Выберите проект"
          label="Проект"
          value={selectedProject}
          onChange={(value) => setSelectedProject(value)} // Указан обработчик onChange
        />
        <Input
          placeholder="Напишите длительность задачи"
          label="Длительность"
        />
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
