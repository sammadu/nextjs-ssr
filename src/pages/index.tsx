import type { NextPage } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "./common/Footer";

const Home: NextPage = () => {
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
          Pre Rendering - Static Generation
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Next JS pre-renders pages in the application, HTML pages are generated
          at build time. (This Page)
        </Typography>
        <Typography variant="body1">
          By default, without any configuration, The HTML of every page will
          automatically be statically generated when we build our app. This
          allows the page to be cached by a CDN and indexed by a search engine
        </Typography>
        <Typography variant="body2">
          <b>prod server: </b> page will be pre-rendered once `next build` ran
        </Typography>
        <Typography variant="body2">
          <b>dev server: </b> page is pre-rendered for every request you make
        </Typography>
      </Container>

      <Footer />
    </Box>
  );
};

export default Home;
