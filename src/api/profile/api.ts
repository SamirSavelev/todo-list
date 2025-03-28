import { createApi } from "@reduxjs/toolkit/query/react";
import { ProfileResponse } from "./types";
import { customBaseQuery } from "../customBaseQuery";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: customBaseQuery,
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
