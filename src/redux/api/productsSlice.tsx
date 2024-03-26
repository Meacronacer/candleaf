import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6602a6c89d7276a75553dae8.mockapi.io/' }),
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => 'products',
      }),
      getProductById: builder.query({
        query: (id) => `products/${id}`
      }),
      getPopularProducts: builder.query({
        query: () => '/popular'
      })
    }),
})


export const { useGetProductsQuery, useGetProductByIdQuery, useGetPopularProductsQuery } = productsApi
