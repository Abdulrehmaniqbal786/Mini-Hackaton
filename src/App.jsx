import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/app_theme";
import { Router_App } from "./config/router-app/Router_App";
import { Home } from "@mui/icons-material";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router_App />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
