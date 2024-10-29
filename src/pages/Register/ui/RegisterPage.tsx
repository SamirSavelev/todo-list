import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./Register.module.scss";
import { Button, Input } from "../../../shared/ui/components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Описываем интерфейс формы
interface IFormInputs {
  name: string;
  lastname: string;
  surname: string;
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

  // Функция для обработки отправки формы
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
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
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Имя обязательно для заполнения" }}
            render={({ field }) => (
              <Input {...field} placeholder="Введите имя" />
            )}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          {/* Фамилия */}
          <Controller
            name="lastname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} placeholder="Введите фамилию" />
            )}
          />

          {/* Отчество */}
          <Controller
            name="surname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} placeholder="Введите отчество" />
            )}
          />

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
