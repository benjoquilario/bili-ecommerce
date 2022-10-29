import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({ baseUrl: "https://qzj52i-5000.preview.csb.app" }),
  endpoints: (builder) => ({}),
});
