import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../../common/Footer";
import { useState } from "react";
import { Button } from "@mui/material";
import baseUrl from "../../baseUrl";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  todo,
}) => {
  const [response, setResponse] = useState(todo);
  const [id, setId] = useState(1);

  const fetchNewTodo = async () => {
    setId(id + 1);
    const res = await fetch(`${baseUrl}/todos/${id}`);
    const json = await res.json();
    setResponse(json);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Pre Rendering - ISR
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Next JS pre-renders pages in the application, HTML pages are generated
          at build time. (This Page)
        </Typography>
        <Typography variant="body1">
          When should I use getStaticProps?
        </Typography>
        <Typography variant="body2">
          - The data required to render the page is available at build time
          ahead of a user&apos;s request
        </Typography>
        <Typography variant="body2">
          - The data can be publicly cached (not user-specific)
        </Typography>
        <Typography variant="body2">
          - The page must be pre-rendered (for SEO) and be very fast —
          getStaticProps generates HTML and JSON files, both of which can be
          cached by a CDN for performance
        </Typography>

        <br />

        <Typography variant="body1">When does getStaticProps run</Typography>
        <Typography variant="body2">
          - getStaticProps always runs on the server and never on the client.
        </Typography>
        <Typography variant="body2">
          - getStaticProps always runs during next build
        </Typography>
        <Typography variant="body2">
          - getStaticProps runs in the background when using revalidate
        </Typography>

        <pre>
          {id === 1 ? "// pre-rendered" : "// client-ride rendered"}
          <br />
          <code>{JSON.stringify(response, null, 2)}</code>
        </pre>
        <Button variant="contained" onClick={fetchNewTodo}>
          Fetch new todo
        </Button>
      </Container>

      <Footer />
    </Box>
  );
};

type Props = {
  todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resposne = await fetch(`${baseUrl}/todos/1`);
  const todo = await resposne.json() as Props["todo"];

  return {
    props: {
      todo,
    },
    revalidate: 10,
  };
};

export default Home;
