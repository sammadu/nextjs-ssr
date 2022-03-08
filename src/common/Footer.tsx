import { Box, Container, Typography } from '@mui/material';
import Copyright from '../components/Copyright';

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">Dennis Gonzales</Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
