import "../draft/DraftPage.css";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface MyForm {
  name: string;
  age: number;
}

export const DraftPage = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<MyForm>({
    defaultValues: {
      age: 18,
    },
  });

  const submit: SubmitHandler<MyForm> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<MyForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit, error)}>
        <input
          type="text"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? true : false}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        <button>Отправить</button>
        <button
          type="button"
          onClick={() =>
            reset({
              age: 0,
              name: "",
            })
          }
        >
          Очистить форму
        </button>
        <button type="button" onClick={() => clearErrors()}>
          Очистить ошибки
        </button>
        <button type="button" onClick={() => setValue("name", "Вася")}>
          Установить имя
        </button>
      </form>
      {watch("age")}
    </>
  );
};
