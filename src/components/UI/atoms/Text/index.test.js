import React from "react";
import { render } from "@testing-library/react";
import Text from "./index";

describe("<Text/>", () => {
  const content = "텍스트 내용";
  const { getByText } = render(<Text content={content} />);
  it("Renders Text correctly", () => {
    expect(getByText(content)).toMatchSnapshot();
  });
});
