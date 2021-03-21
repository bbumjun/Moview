import React from "react";
import { render } from "@testing-library/react";
import Image from "./Image";
describe("<Image/>", () => {
  const posterPath = "/AmUGn1rJ9XDDP6DYn9OA2uV8MIg.jpg";
  const title = "상티넬";
  it("matches snapshot", () => {
    const { container } = render(
      <Image posterPath={posterPath} title={title} />
    );
    expect(container).toMatchSnapshot();
  });
  it("render image with src and alt attribute", () => {
    const { getByRole } = render(
      <Image posterPath={posterPath} title={title} />
    );
    const posterImage = getByRole("posterImage");
    expect(posterImage).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + posterPath
    );
    expect(posterImage).toHaveAttribute("alt", title);
  });
});
