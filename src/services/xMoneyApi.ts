import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const xMoneyApi = createApi({
  reducerPath: "xMoneyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (build) => ({
    getAllTodos: build.query<Todo[], void | never>({
      query: () => "/todos",
    }),
  }),
});

export const { getAllTodos } = xMoneyApi.endpoints;

export const { useGetAllTodosQuery } = xMoneyApi;
