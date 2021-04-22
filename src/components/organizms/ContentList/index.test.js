import React from "react";
import { render, fireEvent, waitFor, cleanup } from "test-utils";
import CardList from "components/organizms/CardList";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);
describe("CardList", () => {
  const category = "movie";
  const params = {
    sort_by: "popularity.desc",
    with_original_language: "ko",
  };
  const contentTitle = "인기있는 한국 영화";

  it("should matches snapshot", async () => {
    const { container } = render(
      <CardList
        category={category}
        params={params}
        contentTitle={contentTitle}
      />
    );

    await waitFor(() => expect(container).toMatchSnapshot());
  });
  it("renders CardList component", async () => {
    const { findByText, debug } = render(
      <CardList
        category={category}
        params={params}
        contentTitle={contentTitle}
      />
    );
    await findByText(contentTitle);
    await findByText("승리호");
    await findByText("2021.02.05");
  });

  it("Cards container scroll is moved when previous/next cards buttons clicked", async () => {
    const { findByAltText, findByRole } = render(
      <CardList
        category={category}
        params={params}
        contentTitle={contentTitle}
      />
    );

    Element.prototype.scrollTo = jest.fn();

    const leftBtn = await findByAltText("previous cards");
    const rightBtn = await findByAltText("next cards");
    const cardsContainer = await findByRole("cardsContainer");
    fireEvent.click(rightBtn);
    expect(cardsContainer.scrollTo).toHaveBeenCalled();

    fireEvent.click(leftBtn);
    expect(cardsContainer.scrollTo).toHaveBeenCalled();
  });
});
