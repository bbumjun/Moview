import React from "react";
import { render } from "test-utils";
import ContentCard from "./index";
describe("<ContentCard/>", () => {
  const title = "title";
  const imgSrc = "";
  const date = "2021-02-03";
  const rate = "6.3";
  const index = "3";
  const category = "movie";

  it("matches snapshot", () => {
    const { container } = render(
      <ContentCard
        title={title}
        imgSrc={imgSrc}
        date={date}
        rate={rate}
        index={index}
        category={category}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("renders correctly", async () => {
    const { getByText, getByAltText } = render(
      <ContentCard
        title={title}
        imgSrc={imgSrc}
        date={date}
        rate={rate}
        index={index}
        category={category}
      />
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByAltText(title)).toBeInTheDocument();
  });
});
