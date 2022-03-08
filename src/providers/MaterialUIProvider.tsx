import {
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import muiTheme from '../styles/theme/muiTheme';

interface MaterialUIProviderProps {
  children: React.ReactNode;
}

/**
 * @component MaterialUIProvider
 * @argument0 {React.ReactNode} children
 * @description Wraps the children with the Material UI theme provider.
 */
const MaterialUIProvider = ({
  children,
}: MaterialUIProviderProps): JSX.Element => {

  return (
    <ThemeProvider theme={muiTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MaterialUIProvider;
