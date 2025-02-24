import { useState } from "react";
import styles from "./AuthPage.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Input } from "@shared/ui/components";
import { useLoginMutation } from "src/api/auth/api";
import { LoginRequest } from "src/api/auth/types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@app/hooks";
import { loginSuccess } from "src/features/Auth/authSlice";

export const AuthPage = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("1234");
  const [showPassword, setShowPassword] = useState(false);

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const log = async (data: LoginRequest) => {
    try {
      const response = await login(data).unwrap();
      // Предположим, что ответ содержит accessToken
      console.log("УСПЕШНО response", response);
      dispatch(
        loginSuccess({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        })
      );
    } catch (error) {
      console.error("ОШИБКА error", error);
    }
    console.log("Данные пользователя", data);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Авторизация</h2>
        <Input
          placeholder="Введите Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Введите пароль"
          value={password}
          type={showPassword ? "text" : "password"}
          onChange={(event) => setPassword(event.target.value)}
          inputSuffix={
            <span onClick={toggleShowPassword} style={{ cursor: "pointer" }}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          }
        />
        <div className={styles.button_container}>
          <Button type="primary" onClick={() => log({ email, password })}>
            Войти
          </Button>
        </div>
        <p>
          Еще не зарегистрированы?{" "}
          <Link to="/register">Нажмите здесь и зарегистрируйтесь</Link>
        </p>
      </div>
    </div>
  );
};
