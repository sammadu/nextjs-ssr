import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  ListItemButton,
  Button,
} from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

const TodosShallow: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  todos: prefetchedTodos,
}) => {
  const [todos, setTodos] = useState(prefetchedTodos);
  const router = useRouter();

  const fetchUser1Todos = async () => {
    const res = await fetch("http://localhost:4000/todos?userId=1");
    const data = await res.json();
    setTodos(data);
    router.push("/todos-shallow?userId=1", undefined, { shallow: true });
  }

  return (
    <>
    <Button variant="contained" onClick={fetchUser1Todos}>Filter Completed</Button>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo: any) => (
          <Fragment key={todo.id}>
            <ListItem alignItems="flex-start">
              <Link href={`/ssg/${todo.id}`} passHref>
                <ListItemButton LinkComponent="a">
                  <ListItemText
                    primary={`User Id: ${todo.userId}`}
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
                        {todo.completed ? " (completed)" : "(incomplete)"}
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { userId } = query;
  const completedQuery = userId ? `?userId=1` : "";

  const res = await fetch(`http://localhost:4000/todos${completedQuery}`);
  const data = await res.json();

  return {
    props: {
      todos: data
    }
  };
}

export default TodosShallow;
