import React from "react";
import { render, fireEvent, waitFor, cleanup } from "test-utils";
import ContentList from "components/organizms/ContentList";
import contentsData from "fakeData/movieList";
afterEach(cleanup);
describe("ContentList", () => {
  const conetntType = "movie";
  const contentTitle = "인기있는 한국 영화";
  const contents = contentsData.results;

  it("should matches snapshot", () => {
    const { container } = render(
      <ContentList
        conetntType={conetntType}
        contents={contents}
        contentTitle={contentTitle}
      />
    );

    expect(container).toMatchSnapshot();
  });
  it("renders ContentList component", () => {
    const { getByText, debug } = render(
      <ContentList
        conetntType={conetntType}
        contents={contents}
        contentTitle={contentTitle}
      />
    );
    getByText(contentTitle);
    getByText("승리호");
    getByText("2021.02.05");
  });

  it("Cards container scroll is moved when previous/next cards buttons clicked", () => {
    const { getByAltText, getByRole } = render(
      <ContentList
        conetntType={conetntType}
        contents={contents}
        contentTitle={contentTitle}
      />
    );

    Element.prototype.scrollTo = jest.fn();

    const leftBtn = getByAltText("previous cards");
    const rightBtn = getByAltText("next cards");
    const cardsContainer = getByRole("cardsContainer");
    fireEvent.click(rightBtn);
    expect(cardsContainer.scrollTo).toHaveBeenCalled();

    fireEvent.click(leftBtn);
    expect(cardsContainer.scrollTo).toHaveBeenCalled();
  });
});
