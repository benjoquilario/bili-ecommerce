import { apiSlice } from "./api";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: {
          ...user,
        },
      }),
    }),
    getAuthUser: builder.query({
      query: () => "/users/login",
    }),
  }),
});

export const { useLoginUserMutation, userGetAuthUserQuery } = authApi;
