import { Input, Text } from "@shared/ui/components";
import styles from "./CreateTaskModalNew.module.scss";
import { useForm } from "react-hook-form";
import { TaskFormInterface } from "./types";
import { useEffect } from "react";

export const CreateTaskModalNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormInterface>();

  const onSubmit = (data: TaskFormInterface) => {
    console.log("форма", data);
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

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
        <button type="submit">Создать задачу</button>
      </form>
    </div>
  );
};
