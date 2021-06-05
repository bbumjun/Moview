import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";
import Header from "components/organizms/Header";
import Footer from "components/organizms/Footer";
import { RecoilRoot } from "recoil";
import { createBrowserHistory } from "history";
import WholeItemsPage from "./pages/WholeItemsPage";
const history = createBrowserHistory();
export const App: React.FC = () => {
  return (
    <Router history={history}>
      <RecoilRoot>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/contents/:contentType/:id" component={DetailPage} />
          <Route path="/discover" component={WholeItemsPage} />
        </Switch>
        <Footer />
      </RecoilRoot>
    </Router>
  );
};
