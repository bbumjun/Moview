import React from "react";
import { render } from "@testing-library/react";
import Card from "./index";
import { ThemeProvider } from "styled-components";
import theme from "common/theme";
import { BrowserRouter as Router } from "react-router-dom";
describe("<Card/>", () => {
  const title = "title";
  const imgSrc = "";
  const date = "2021-02-03";
  const rate = "6.3";
  const index = "3";

  const { container } = render(
    <Router>
      <ThemeProvider theme={theme}>
        <Card
          title={title}
          imgSrc={imgSrc}
          date={date}
          rate={rate}
          index={index}
        />
      </ThemeProvider>
    </Router>
  );
  it("renders Card correctly", () => {
    expect(container).toMatchSnapshot();
  });
});
