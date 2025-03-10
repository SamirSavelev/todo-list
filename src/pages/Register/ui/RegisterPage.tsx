import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./Register.module.scss";
import { Button, Input } from "../../../shared/ui/components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRegisterMutation } from "src/api/auth/api";
import { ErrorInterface } from "@app/types";
import { useNavigate } from "react-router-dom";

// Описываем интерфейс формы
interface RegisterForm {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  password2: string;
}

export const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();
  const [register, { isLoading, error }] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Функция для обработки отправки формы
  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    try {
      const response = await register(data).unwrap();
      setSuccessMessage(response.message);
      setTimeout(() => {
        navigate("/auth");
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Регистрация</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: "Имя обязательно для заполнения" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Введите имя"
                autoComplete="new-password"
                description={{
                  message: errors.firstName ? errors.firstName.message : "",
                  type: errors.firstName ? "error" : "info",
                }}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: "Фамилия обязательна для заполнения" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Введите фамилию"
                autoComplete="new-password"
                description={{
                  message: errors.lastName ? errors.lastName.message : "",
                  type: errors.lastName ? "error" : "info",
                }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email обязателен для заполнения",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Некорректный Email",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Введите email"
                autoComplete="new-password"
                description={{
                  message: errors.email ? errors.email.message : "",
                  type: errors.email ? "error" : "info",
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Пароль обязателен для заполнения",
              minLength: {
                value: 8,
                message: "Пароль должен быть не менее 8 символов",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Пароль должен содержать хотя бы одну букву и одну цифру",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder="Придумайте пароль"
                autoComplete="new-password"
                description={{
                  message: errors.password ? errors.password.message : "",
                  type: errors.password ? "error" : "info",
                }}
                inputSuffix={
                  <span
                    onClick={toggleShowPassword}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                }
              />
            )}
          />
          <Controller
            name="password2"
            control={control}
            defaultValue=""
            rules={{
              required: "Подтверждение пароля обязательно",
              validate: (value) =>
                value === watch("password") || "Пароли не совпадают",
            }}
            render={({ field }) => (
              <Input
                {...field}
                type={showPassword2 ? "text" : "password"}
                placeholder="Подтвердите пароль"
                autoComplete="new-password"
                description={{
                  message: errors.password2 ? errors.password2.message : "",
                  type: errors.password2 ? "error" : "info",
                }}
                inputSuffix={
                  <span
                    onClick={toggleShowPassword2}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                  </span>
                }
              />
            )}
          />
          <div className={styles.button_container}>
            <Button disabled={isLoading} type="primary">
              Зарегистрироваться
            </Button>
          </div>
          {error && (
            <div className={styles.error}>
              {(error as ErrorInterface)?.data?.message}
            </div>
          )}
          {successMessage && (
            <div className={styles.success}>{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};
