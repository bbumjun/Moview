import React from "react";
import { render } from "test-utils";
import Profile from "./index";
describe("Profile Component", () => {
  const props = {
    contentType: "movie",
    id: "399566",
  };
  it("matches snapshot", () => {
    const { container } = render(<Profile {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByText, getByAltText, getByRole } = render(
      <Profile {...props} />
    );

    expect(getByRole("background")).toBeInTheDocument();
    expect(getByAltText("고질라 VS. 콩")).toBeInTheDocument();
    expect(getByText("고질라 VS. 콩")).toBeInTheDocument();
    expect(getByText(/2021/)).toBeInTheDocument();
    expect(getByText(/4.1/)).toBeInTheDocument();
  });
});
