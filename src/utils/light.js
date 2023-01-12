import { red } from "@mui/material/colors";
import { createTheme } from "@mui/system";

// Normal or default theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#cc4444",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f5f5f5",
    },
    titleBar: {
      main: "#eeeeee",
      contrastText: "#222222",
    },
  },
});

export default theme;
