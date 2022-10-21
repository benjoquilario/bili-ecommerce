import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IProduct {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  quantity: number;
}

export const productsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: builder => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/api/products',
    }),
    getProduct: builder.query<IProduct, string>({
      query: productId => `api/products/${productId}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
