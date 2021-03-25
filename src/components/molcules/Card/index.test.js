import React from "react";
import { render } from "@testing-library/react";
import Card from "./index";

describe("<Card/>", () => {
  const title = "title";
  const imgSrc = "";
  const date = "2021-02-03";
  const rate = "6.3";
  const index = "3";

  const { container } = render(
    <Card title={title} imgSrc={imgSrc} date={date} rate={rate} index={index} />
  );
  it("renders Card correctly", () => {
    expect(container).toMatchSnapshot();
  });
});
