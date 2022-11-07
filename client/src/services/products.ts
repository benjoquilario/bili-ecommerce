import { apiSlice } from "./api";
import { IProduct } from "../store/types";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => "/products",
    }),
    getProduct: builder.query<IProduct, string>({
      query: (productId) => `/products/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = extendedApiSlice;
