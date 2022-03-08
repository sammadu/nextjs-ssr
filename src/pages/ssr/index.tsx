import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../../common/Footer";
import { useState } from "react";
import { Button } from "@mui/material";

const SSRPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  news
}) => {
  const [response, setResponse] = useState(news);
  const [id, setId] = useState(1);

  const fetchNewNews = async () => {
    setId(id + 1);
    console.log(`fetchNewNews: ${id}`);
    const res = await fetch(`http://localhost:4000/news/${id}`);
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
          Pre Rendering - SSR
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Next JS pre-renders pages in the application, HTML pages are generated
          on each request
        </Typography>
        <Typography variant="body1">
          Useful for data(apis) dependent pages, such as news feed.
        </Typography>

        <pre>
          {id === 1 ? "// pre-rendered" : "// client-ride rendered"}
          <br />
          <code>{JSON.stringify(response, null, 2)}</code>
        </pre>
        <Button variant="contained" onClick={fetchNewNews}>
          Fetch new news
        </Button>
      </Container>

      <Footer />
    </Box>
  );
};

type Props = {
  news: {
    id: number;
    article: string;
    description: string;
    category: string;
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch(`http://localhost:4000/news/1`);
  const news = await response.json() as Props["news"];
  console.log({ ssr: news });

  return {
    props: {
      news
    }
  };
};

export default SSRPage;
