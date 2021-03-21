import React from "react";
import Header from "components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TrendView from "components/TrendView";
import "tailwindcss/tailwind.css";
export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <TrendView category="movie" />
    </Router>
  );
};
