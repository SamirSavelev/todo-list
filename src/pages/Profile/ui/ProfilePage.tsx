import { Button } from "@shared/ui/components";
import { useRegisterMutation } from "src/api/auth/api";
import { RegisterRequest } from "src/api/auth/types";

export const ProfilePage = () => {
  const [register] = useRegisterMutation();

  const handleRegister = async (data: RegisterRequest) => {
    try {
      const response = await register(data).unwrap();
      console.log("УСПЕШНО response", response);
    } catch (error) {
      console.log("ОШИБКА error", error);
    }
  };

  return (
    <div>
      <Button>Регистрация</Button>
    </div>
  );
};
