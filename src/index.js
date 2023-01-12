import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import "@fontsource/barlow";
import "@fontsource/teko";
import { BrowserRouter as Router } from "react-router-dom";
import CustomThemeProvider from "./utils/CustomThemeProvider";
import { CssBaseline } from "@mui/material";
import { UserDataProvider } from "./context/UserDataProvider";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const userData = {
  userName: "admin",
  passWord: "abc@09",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <UserDataProvider>
          <App />
        </UserDataProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
