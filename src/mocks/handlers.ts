import { rest } from "msw";
import { movieList } from "fakeData";
export const handlers = [
  rest.get("https://api.themoviedb.org/3/discover/movie", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieList));
  }),
];
