import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const xMoneyApi = createApi({
  reducerPath: "xMoneyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getAllTodos: build.query<unknown, void | never>({
      query: () => "/todos",
    }),
  }),
});

export const { getAllTodos } = xMoneyApi.endpoints;

export const { useGetAllTodosQuery } = xMoneyApi;
