import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { App } from "./App";
const Wrapper: React.FC = () => (
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>
);
ReactDOM.render(<Wrapper />, document.getElementById("root"));
