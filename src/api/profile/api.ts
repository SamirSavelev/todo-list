// src/api/profile/api.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "src/api/baseQueryWithReauth";
import { ProfileResponse } from "./types";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProfile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
export const reducerProfile = profileApi.reducer;
