import { useState } from "react";
import styles from "./AuthPage.module.scss";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button, Input } from "@shared/ui/components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "src/api/auth/api";
import { ErrorInterface } from "@app/types";
import { useAppDispatch } from "@app/hooks";
import { setCredentials } from "src/services/auth/authSlice";
import { useNavigate } from "react-router-dom";

interface AuthForm {
  email: string;
  password: string;
}

export const AuthPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<AuthForm> = async (data) => {
    try {
      const { accessToken, refreshToken } = await login(data).unwrap();
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch(setCredentials({ accessToken, refreshToken }));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Авторизация</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Введите Email"
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
            rules={{ required: "Пароль обязателен для заполнения" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Введите пароль"
                type={showPassword ? "text" : "password"}
                inputSuffix={
                  <span
                    onClick={toggleShowPassword}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                }
                description={{
                  message: errors.password ? errors.password.message : "",
                  type: errors.password ? "error" : "info",
                }}
              />
            )}
          />
          <div className={styles.button_container}>
            <Button type="primary" disabled={isLoading}>
              Войти
            </Button>
          </div>
          {error && (
            <div className={styles.error}>
              {(error as ErrorInterface)?.data?.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
