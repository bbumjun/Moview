import React from "react";
import { render } from "@testing-library/react";
import Image from "./index";

describe("<Image/>", () => {
  const src = "이미지 주소";
  const alt = "이미지 설명";
  const { getByAltText } = render(<Image src={src} alt={alt} />);
  it("renders Image Correctly", () => {
    expect(getByAltText(alt)).toMatchSnapshot();
  });
});
