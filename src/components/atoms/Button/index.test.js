import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

describe("<Button/>", () => {
  const buttonText = "버튼 이름";
  const onClick = () => {};
  const { getByText } = render(<Button onClick={onClick}>{buttonText}</Button>);
  it("renders Button Correctly", () => {
    expect(getByText(buttonText)).toMatchSnapshot();
  });
});
