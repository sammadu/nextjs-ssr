import { NextPage } from 'next';
import { useGetAllTodosQuery } from '../services/xMoneyApi';

const Todos: NextPage = ()=> {
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
