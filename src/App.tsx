import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "tailwindcss/tailwind.css";
import theme from "src/common/theme";
import MainPage from "pages/MainPage";
export const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};
