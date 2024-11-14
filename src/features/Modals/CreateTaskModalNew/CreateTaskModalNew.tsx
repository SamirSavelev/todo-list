import {
  DatePicker,
  Input,
  Select,
  Text,
  Textarea,
} from "@shared/ui/components";
import styles from "./CreateTaskModalNew.module.scss";
import { useForm, Controller } from "react-hook-form";
import { TaskFormInterface } from "./types";

const options = [
  { label: "Фитнес", value: "1" },
  { label: "Учеба", value: "2" },
  { label: "Домашние дела", value: "3" },
];

export const CreateTaskModalNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TaskFormInterface>();

  const onSubmit = (data: TaskFormInterface) => {
    console.log("форма", data);
  };

  return (
    <div className={styles.container}>
      <Text variant="h3">Создание задачи</Text>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          label="Название"
          placeholder="Придумайте название"
          description={{
            message: errors?.title?.message,
            type: errors?.title?.message ? "error" : "info",
          }}
          {...register("title", {
            required: "Название задачи обязательно",
            maxLength: { value: 50, message: "Максимум 50 символов" },
          })}
        />
        <Textarea
          label="Описание"
          placeholder="Опишите детали задачи"
          description={{
            message: errors?.description?.message,
            type: errors?.description?.message ? "error" : "info",
          }}
          {...register("description", {
            required: "Описание задачи обязательно",
          })}
        />
        <DatePicker
          label="Дата начала"
          description={{
            message: errors?.startDate?.message,
            type: errors?.startDate?.message ? "error" : "info",
          }}
          {...register("startDate", {
            required: "Выберите дату начала задачи",
          })}
        />
        <DatePicker
          label="Дата окончания"
          description={{
            message: errors?.endDate?.message,
            type: errors?.endDate?.message ? "error" : "info",
          }}
          {...register("endDate", {
            required: "Выберите дату окончания задачи",
          })}
        />
        <Controller
          name="select"
          control={control}
          // rules={{ required: "Поле обязательно для выбора" }}
          render={({ field }) => (
            <Select
              label="Проект"
              placeholder="Выберите проект"
              options={options}
              {...field}
              // description={{
              //   message: errors?.select?.message,
              //   type: errors?.select ? "error" : "info",
              // }}
            />
          )}
        />
        <Input
          label="Длительность"
          placeholder="Напишите длительность задачи"
          type="number"
          {...register("duration")}
        />
        <button type="submit">Создать задачу</button>
      </form>
    </div>
  );
};
