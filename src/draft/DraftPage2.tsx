import { Controller, SubmitHandler, useForm } from "react-hook-form";
import "../draft/DraftPge2.scss";
import { useEffect } from "react";

interface IForm {
  "e-mail": string;
  message: string;
  isImportant: boolean;
}

export const DraftPage2 = () => {
  const { register, handleSubmit, formState, reset, control } = useForm<IForm>({
    mode: "onChange",
  });

  const emailError = formState.errors["e-mail"]?.message;
  const messageError = formState.errors["message"]?.message;

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <>
      <h1>Feedback form</h1>

      <button onClick={() => reset()}>RESET</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter e-mail:"
          {...register("e-mail", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {emailError && (
          <p
            style={{
              color: "tomato",
              margin: "2px auto 0",
              textAlign: "left",
              fontSize: 14,
            }}
          >
            {emailError}
          </p>
        )}
        <textarea
          placeholder="Enter message"
          {...register("message", {
            required: "This field is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        ></textarea>
        {messageError && (
          <p
            style={{
              color: "tomato",
              margin: "2px auto 0",
              textAlign: "left",
              fontSize: 14,
            }}
          >
            {messageError}
          </p>
        )}

        <Controller
          control={control}
          name="isImportant"
          render={({ field }) => (
            <button
              style={{ padding: 6, marginBottom: 10, display: "block" }}
              onClick={(e) => {
                e.preventDefault();
                field.onChange(!field.value);
              }}
            >
              {field.value ? "ВАЖНОЕ СООБЩЕНИЕ" : "НЕ ВАЖНОЕ СООБЩЕНИЕ"}
            </button>
          )}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};
