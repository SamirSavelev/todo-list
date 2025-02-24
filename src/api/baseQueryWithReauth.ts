// src/api/baseQueryWithReauth.ts
// src/api/baseQueryWithReauth.ts
import { RootState } from "@app/store";
import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { logout, refreshSuccess } from "src/features/Auth/authSlice";
import { RefreshResponse } from "./auth/types";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).auth.accessToken;
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Если произошла ошибка авторизации (401 или 400)
  if (
    result.error &&
    (result.error.status === 401 || result.error.status === 400)
  ) {
    // Получаем refresh токен из состояния
    const refreshToken = (api.getState() as RootState).auth.refreshToken;
    if (refreshToken) {
      // Попытка обновить access токен
      const refreshResult = await baseQuery(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { refreshToken },
        },
        api,
        extraOptions
      );
      const data: RefreshResponse = refreshResult.data as RefreshResponse;
      if (data) {
        // Если обновление прошло успешно, сохраняем новый accessToken
        const newAccessToken = data.accessToken;
        api.dispatch(refreshSuccess(newAccessToken));
        // Повторяем исходный запрос с новым токеном
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Если обновление не удалось, сбрасываем авторизацию
        api.dispatch(logout());
      }
    } else {
      // Если refresh токена нет, сбрасываем авторизацию
      api.dispatch(logout());
    }
  }
  return result;
};
