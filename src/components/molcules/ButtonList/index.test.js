import React from "react";
import { render } from "test-utils";
import ButtonList from "./index";
import Button from "../../atoms/Button";

describe("<ButtonList/>", () => {
  const ButtonItems = [
    <Button key="1">button1</Button>,
    <Button key="2">button2</Button>,
    <Button key="3">button3</Button>,
  ];

  const { container } = render(<ButtonList>{ButtonItems}</ButtonList>);
  it("renders ButtonList correctly", () => {
    expect(container).toMatchSnapshot();
  });
});
