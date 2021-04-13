import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "src/common/theme";
import { App } from "./App";
import { worker } from "mokcs/browser";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const Wrapper: React.FC = () => (
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>
);

ReactDOM.render(<Wrapper />, document.getElementById("root"));
