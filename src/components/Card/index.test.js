import React from "react";
import { render } from "@testing-library/react";
import Card from "./index";

describe("<Card/>", () => {
  const posterPath = "/4SEAkDj7nflDPqCwD1LxrGkldTt.jpg",
    title = "빌로우제로",
    voteAverage = 6.5,
    country = "es",
    releaseDate = "2021-01-29";

  it("matches snapshot", () => {
    const { container } = render(
      <Card
        posterPath={posterPath}
        title={title}
        voteAverage={voteAverage}
        country={country}
        releaseDate={releaseDate}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("renders Card including image, title, rate, country, releas date", () => {
    const { getByRole } = render(
      <Card
        posterPath={posterPath}
        title={title}
        voteAverage={voteAverage}
        country={country}
        releaseDate={releaseDate}
      />
    );
    expect(getByRole("posterImage")).toHaveAttribute("alt", title);
    expect(getByRole("title")).toHaveTextContent(title);
    expect(getByRole("rate")).toHaveTextContent(3.3);
    expect(getByRole("info")).toHaveTextContent("2021");
  });
});
