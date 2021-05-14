import { selector } from "recoil";
import { baseUrl } from "common/url";
import axios, { AxiosResponse } from "axios";

interface genre {
  id: number;
  name: string;
}
export const movieGenresState = selector({
  key: "movieGenresState",
  get: async () => {
    const response: AxiosResponse<{ genres: genre[] }> = await axios({
      baseURL: baseUrl,
      url: "genre/movie/list",
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY,
        language: "ko-KR",
      },
    });
    return response.data.genres;
  },
});

export const tvGenresState = selector({
  key: "tvGenresState",
  get: async () => {
    const response: AxiosResponse<{ genres: genre[] }> = await axios({
      baseURL: baseUrl,
      url: "genre/tv/list",
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY,
        language: "ko-KR",
      },
    });
    return response.data.genres;
  },
});
