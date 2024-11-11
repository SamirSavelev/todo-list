import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./CreateTaskModal.module.scss";
import {
  CreateTaskModalType,
  TaskFormData,
} from "../../../../src/features/Modal/CreateTaskModal/types";
import { Button, Input, Select } from "@shared/ui/components";
import { Textarea } from "@shared/ui/components/Textarea";

export const CreateTaskModal: CreateTaskModalType = ({ onSave, onClose }) => {
  const { handleSubmit, setValue, reset, watch } = useForm<TaskFormData>();

  // Устанавливаем значения по умолчанию как пустую строку, чтобы избежать проблемы с неконтролируемыми полями
  const taskName = watch("taskName") || "";
  const description = watch("description") || "";
  const startDate = watch("startDate") || "";
  const endDate = watch("endDate") || "";
  const project = watch("project") || "";
  const duration = watch("duration") || "";

  const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    onSave(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h3>Создание задачи</h3>
        <Input
          placeholder="Придумайте название задачи"
          value={taskName}
          onChange={(e) => setValue("taskName", e.target.value)}
          label="Название"
        />
        <Textarea
          placeholder="Опишите детали задачи"
          value={description}
          onChange={(e) => setValue("description", e.target.value)}
          label="Описание"
        />
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setValue("startDate", e.target.value)}
          label="Дата начала"
        />
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setValue("endDate", e.target.value)}
          label="Дата окончания"
        />
        <Select
          options={["1", "2"]}
          placeholder="Выберите проект"
          label="Проект"
          value={project}
          onChange={(value) => setValue("project", value)}
        />
        <Input
          placeholder="Напишите длительность задачи"
          value={duration}
          onChange={(e) => setValue("duration", e.target.value)}
          label="Длительность"
        />
      </div>
      <div className={styles.button_container}>
        <Button
          size="small"
          type="primary"
          onClick={() => {
            reset();
            onClose();
          }}
        >
          Отменить
        </Button>
        <Button size="small" type="primary">
          Сохранить
        </Button>
      </div>
    </form>
  );
};
