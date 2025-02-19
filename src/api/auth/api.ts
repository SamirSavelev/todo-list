import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterRequest, RegisterResponse } from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: ({ mutation }) => ({
    register: mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;

export const reducerAuth = authApi.reducer;
