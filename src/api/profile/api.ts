import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProfileResponse } from "./types";
import { RootState } from "@app/store";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: ({ query }) => ({
    profile: query<ProfileResponse, void>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyProfileQuery, useProfileQuery } = profileApi;

export const profileReducerApi = profileApi.reducer;
