import { useState } from "react";
import styles from "./AuthPage.module.scss";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button, Input } from "@shared/ui/components";
import { useLoginMutation } from "src/api/auth/api";
import { LoginRequest } from "src/api/auth/types";

export const AuthPage = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("1234");
  const [showPassword, setShowPassword] = useState(false);

  const [login] = useLoginMutation();

  const log = async (data: LoginRequest) => {
    try {
      const response = await login(data).unwrap();
      console.log("УСПЕШНО response", response);
    } catch (error) {
      console.log("ОШИБКА error", error);
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
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Input
          placeholder="Введите пароль"
          value={password}
          type={showPassword ? "text" : "password"}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
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
      </div>
    </div>
  );
};
