import { selector } from "recoil";
import { baseUrl } from "common/url";
import axios, { AxiosResponse } from "axios";

interface genre {
  id: number;
  name: string;
  color: string;
}

const colors = [
  "#0066cc",
  "#ff66ff",
  "#ff0000",
  "#E56717",
  "#ffcc00",
  "#3B3131",
  "#9933ff",
  "#33ccff",
  "#000099",
  "#cc3399",
  "#cc9900",
  "#ffccff",
  "#009999",
  "#254117",
  "#33cc33",
  "#660066",
  "#cc6699",
  "#99ffcc",
  "#666699",
  "#000066",
];
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
    return response.data.genres.map((genre, idx) => ({
      ...genre,
      color: colors[idx],
    }));
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
    return response.data.genres.map((genre, idx) => ({
      ...genre,
      color: colors[idx],
    }));
  },
});
