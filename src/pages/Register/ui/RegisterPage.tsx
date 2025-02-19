import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./Register.module.scss";
import { Button, Input } from "../../../shared/ui/components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRegisterMutation } from "src/api/auth/api";
import { RegisterRequest } from "src/api/auth/types";

// Описываем интерфейс формы
interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}

export const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [register] = useRegisterMutation();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const requestData: RegisterRequest = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    try {
      const response = await register(requestData).unwrap();
      console.log("УСПЕШНО response", response);
    } catch (error) {
      console.log("ОШИБКА error", error);
    }
    console.log("Новый пользователь", requestData);
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
          {/* Имя */}
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: "Имя обязательно для заполнения" }}
            render={({ field }) => (
              <Input {...field} placeholder="Введите имя" />
            )}
          />
          {errors.firstName && (
            <p className={styles.error}>{errors.firstName.message}</p>
          )}

          {/* Фамилия */}
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} placeholder="Введите фамилию" />
            )}
          />

          {/* Отчество */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Электронная почта обязательна для заполнения",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Некорректный адрес электронной почты",
              },
            }}
            render={({ field }) => (
              <Input {...field} placeholder="Введите адрес электронной почты" />
            )}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          {/* Пароль */}
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
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          {/* Подтверждение пароля */}
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
          {errors.password2 && (
            <p className={styles.error}>{errors.password2.message}</p>
          )}

          <div className={styles.button_container}>
            <Button type="primary">Зарегистрироваться</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
