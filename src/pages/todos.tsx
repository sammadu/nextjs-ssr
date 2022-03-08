import React from 'react'
import { useGetAllTodosQuery } from '../services/xMoneyApi';

const Todos = (): JSX.Element => {
  const { data, isLoading } = useGetAllTodosQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default Todos;
