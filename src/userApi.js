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

export const { useGetUsersQuery,useAddUserMutation } = userApi;
