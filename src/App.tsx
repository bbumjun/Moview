import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";
import Header from "components/organizms/Header";
import Footer from "components/organizms/Footer";
import { RecoilRoot } from "recoil";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
export const App: React.FC = () => {
  return (
    <Router history={history}>
      <RecoilRoot>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/contents/:contentType/:id" component={DetailPage} />
        </Switch>
        <Footer />
      </RecoilRoot>
    </Router>
  );
};
