import React from "react";
import { render } from "test-utils";
import Text from "./index";

describe("<Text/>", () => {
  const content = "텍스트 내용";
  const size = "base";
  const { getByText } = render(<Text className={size}>{content}</Text>);
  it("Renders Text correctly", () => {
    expect(getByText(content)).toMatchSnapshot();
  });
});
