import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProfileResponse } from "./types";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: ({ query }) => ({
    getProfile: query<ProfileResponse, void>({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
export const reducerProfile = profileApi.reducer;
