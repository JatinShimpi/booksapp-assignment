// src/services/userApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users?page=2",
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getUsers` query
export const { useGetUsersQuery,useAddUserMutation } = userApi;
