import React from "react";
import { render } from "@testing-library/react";
import Input from "./index";

describe("<Input/>", () => {
  const props = {
    value: "",
    placeholder: "placeholder 로 들어갈 내용",
    inputName: "input 종류",
    onChange: () => {},
  };
  const { getByPlaceholderText } = render(<Input {...props} />);
  it("renders Input Correctly", () => {
    expect(getByPlaceholderText(props.placeholder)).toMatchSnapshot();
  });
});
