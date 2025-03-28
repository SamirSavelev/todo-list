import { RootState } from "@app/store";
import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { logOut, setCredentials } from "src/services/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const customBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
) => {
  // Выполняем исходный запрос
  let result = await baseQuery(args, api, extraOptions);

  // Если получили ошибку 401, пробуем обновить accessToken
  if (
    result.error &&
    "originalStatus" in result.error &&
    (result.error.originalStatus === 401 || result.error.originalStatus === 403)
  ) {
    console.warn("Access token истёк, выполняется попытка обновления...");

    const state = api.getState() as RootState;
    const refreshToken = state.auth.refreshToken;

    if (refreshToken) {
      // Отправляем запрос для обновления accessToken
      const refreshResult = await baseQuery(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const newAccessToken = (refreshResult.data as { accessToken: string })
          .accessToken;
        // Обновляем токен в localStorage
        localStorage.setItem("accessToken", newAccessToken);
        // Обновляем Redux state (при условии, что setCredentials принимает оба токена)
        api.dispatch(
          setCredentials({ accessToken: newAccessToken, refreshToken })
        );
        // Повторяем исходный запрос с новым accessToken
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Если запрос на обновление не удался (например, 401)
        console.error("Ошибка обновления токена, разлогиниваем пользователя");
        api.dispatch(logOut());
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/auth";
      }
    } else {
      // Если refreshToken отсутствует
      console.error("refreshToken отсутствует, разлогиниваем пользователя");
      api.dispatch(logOut());
    }
  }

  return result;
};
