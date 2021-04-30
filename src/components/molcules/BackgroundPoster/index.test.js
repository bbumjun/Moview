import React from "react";
import { render } from "test-utils";
import BackgroundPoster from "./index";
import { originalImgUrl } from "common/url";
describe("BackgroundPoster", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <BackgroundPoster
        imageSrc={originalImgUrl + "/5NxjLfs7Bi07bfZCRl9CCnUw7AA.jpg"}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
