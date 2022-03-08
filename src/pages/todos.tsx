import { List, ListItem, ListItemText, Typography, Divider, ListItemButton } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import { useGetAllTodosQuery } from '../services/xMoneyApi';

const Todos: NextPage = ()=> {
  const { data: todos, isLoading } = useGetAllTodosQuery();

  if (isLoading) {
    return <div>Fetching todos...</div>;
  }

  if (!todos) {
    return <div>No todos found</div>;
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <Fragment key={todo.id}>
          <ListItem alignItems="flex-start">
            <Link href={`/ssg/${todo.id}`} passHref>
              <ListItemButton LinkComponent="a">
                <ListItemText
                  primary={todo.userId}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {todo.title}
                      </Typography>
                      {todo.completed ? " (completed)" : ""}
                    </>
                  }
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
}

export default Todos;
