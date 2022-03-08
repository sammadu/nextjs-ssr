import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";

/**
 * @see https://mui.com/customization/theming/
 * @see https://mui.com/system/styled/
 */
const muiOptions: ThemeOptions = {};

let muiTheme = createTheme(muiOptions);
muiTheme = responsiveFontSizes(muiTheme);

export default muiTheme;
