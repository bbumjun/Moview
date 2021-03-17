import React from "react";
import Header from "components/Header";
import theme from "theme";
import { ThemeProvider } from "styled-components";
export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
};
